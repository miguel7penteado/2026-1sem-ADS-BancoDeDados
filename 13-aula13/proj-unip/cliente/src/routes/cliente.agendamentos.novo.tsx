import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { agendamentosApi, veiculosApi } from "@/services/api";
import type { Veiculo } from "@/lib/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export const Route = createFileRoute("/cliente/agendamentos/novo")({
  validateSearch: (s: Record<string, unknown>) => ({ veiculo: s.veiculo ? Number(s.veiculo) : undefined }),
  component: NovoAgendamento,
});

function NovoAgendamento() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const search = Route.useSearch();
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
  const [form, setForm] = useState({
    id_veiculo: search.veiculo ?? 0,
    data_inicio: "", data_fim: "", periodo: "integral" as const,
  });
  const [resumo, setResumo] = useState(false);

  useEffect(() => { veiculosApi.disponiveis().then(setVeiculos); }, []);

  const veiSel = veiculos.find(v => v.id_veiculo === Number(form.id_veiculo));

  const submit = async () => {
    if (!user?.id_cliente || !form.id_veiculo || !form.data_inicio || !form.data_fim) {
      toast.error("Preencha todos os campos"); return;
    }
    await agendamentosApi.create({
      id_cliente: user.id_cliente, id_veiculo: Number(form.id_veiculo),
      data_inicio: form.data_inicio, data_fim: form.data_fim, periodo: form.periodo,
    });
    toast.success("Agendamento criado!"); navigate({ to: "/cliente/agendamentos" });
  };

  return (
    <div className="max-w-2xl space-y-4">
      <h1 className="text-2xl font-bold">Novo agendamento</h1>
      <Card><CardContent className="p-6 space-y-4">
        <div>
          <Label>Veículo</Label>
          <Select value={String(form.id_veiculo || "")} onValueChange={v => setForm({ ...form, id_veiculo: Number(v) })}>
            <SelectTrigger><SelectValue placeholder="Selecione um veículo disponível" /></SelectTrigger>
            <SelectContent>{veiculos.map(v => <SelectItem key={v.id_veiculo} value={String(v.id_veiculo)}>{v.marca} {v.modelo} · {v.autonomia_km}km</SelectItem>)}</SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div><Label>Data início</Label><Input type="date" value={form.data_inicio} onChange={e => setForm({ ...form, data_inicio: e.target.value })} /></div>
          <div><Label>Data fim</Label><Input type="date" value={form.data_fim} onChange={e => setForm({ ...form, data_fim: e.target.value })} /></div>
        </div>
        <div>
          <Label>Período</Label>
          <Select value={form.periodo} onValueChange={v => setForm({ ...form, periodo: v as any })}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="manha">Manhã</SelectItem>
              <SelectItem value="tarde">Tarde</SelectItem>
              <SelectItem value="noite">Noite</SelectItem>
              <SelectItem value="integral">Integral</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {!resumo
          ? <Button onClick={() => setResumo(true)} className="w-full">Ver resumo</Button>
          : (
            <Card><CardHeader><CardTitle className="text-base">Resumo do agendamento</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div><span className="text-muted-foreground">Veículo:</span> {veiSel ? `${veiSel.marca} ${veiSel.modelo}` : "—"}</div>
              <div><span className="text-muted-foreground">Período:</span> {form.data_inicio} → {form.data_fim} ({form.periodo})</div>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" onClick={() => setResumo(false)}>Editar</Button>
                <Button onClick={submit} className="flex-1">Confirmar agendamento</Button>
              </div>
            </CardContent></Card>
          )
        }
      </CardContent></Card>
    </div>
  );
}
