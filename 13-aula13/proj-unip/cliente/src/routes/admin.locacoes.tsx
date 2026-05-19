import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { agendamentosApi, clientesApi, locacoesApi, veiculosApi } from "@/services/api";
import type { Agendamento, Cliente, Locacao, Veiculo } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { StatusBadge } from "@/components/StatusBadge";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/locacoes")({ component: LocacoesAdmin });

function LocacoesAdmin() {
  const [items, setItems] = useState<Locacao[]>([]);
  const [ags, setAgs] = useState<Agendamento[]>([]);
  const [cls, setCls] = useState<Cliente[]>([]);
  const [vs, setVs] = useState<Veiculo[]>([]);
  const [open, setOpen] = useState<Locacao | null>(null);
  const [form, setForm] = useState({ data_devolucao: "", tempo_locacao_horas: 0, valor_total: 0 });

  const refresh = () => Promise.all([locacoesApi.list(), agendamentosApi.list(), clientesApi.list(), veiculosApi.list()])
    .then(([l, a, c, v]) => { setItems(l); setAgs(a); setCls(c); setVs(v); });
  useEffect(() => { refresh(); }, []);

  const info = (l: Locacao) => {
    const a = ags.find(x => x.id_agendamento === l.id_agendamento);
    return {
      cliente: a ? cls.find(c => c.id_cliente === a.id_cliente)?.nome : "—",
      veiculo: a ? (() => { const v = vs.find(v => v.id_veiculo === a.id_veiculo); return v ? `${v.marca} ${v.modelo}` : "—"; })() : "—",
    };
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Locações</h1>
      <Card><CardContent className="p-4">
        <Table>
          <TableHeader><TableRow>
            <TableHead>Cliente</TableHead><TableHead>Veículo</TableHead><TableHead>Retirada</TableHead>
            <TableHead>Devolução</TableHead><TableHead>Tempo (h)</TableHead><TableHead>Valor</TableHead>
            <TableHead>Status</TableHead><TableHead className="text-right">Ações</TableHead>
          </TableRow></TableHeader>
          <TableBody>
            {items.map(l => {
              const i = info(l);
              return (
                <TableRow key={l.id_locacao}>
                  <TableCell>{i.cliente}</TableCell>
                  <TableCell>{i.veiculo}</TableCell>
                  <TableCell>{l.data_retirada}</TableCell>
                  <TableCell>{l.data_devolucao ?? "—"}</TableCell>
                  <TableCell>{l.tempo_locacao_horas}</TableCell>
                  <TableCell>R$ {l.valor_total.toFixed(2)}</TableCell>
                  <TableCell><StatusBadge status={l.status_locacao} /></TableCell>
                  <TableCell className="text-right">
                    {l.status_locacao === "em_andamento" && (
                      <Button size="sm" onClick={() => { setOpen(l); setForm({ data_devolucao: new Date().toISOString().slice(0, 10), tempo_locacao_horas: l.tempo_locacao_horas, valor_total: l.valor_total }); }}>Finalizar</Button>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
            {items.length === 0 && <TableRow><TableCell colSpan={8} className="text-center text-muted-foreground py-8">Nenhuma locação</TableCell></TableRow>}
          </TableBody>
        </Table>
      </CardContent></Card>

      <Dialog open={!!open} onOpenChange={v => !v && setOpen(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Finalizar locação</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <div><Label>Data de devolução</Label><Input type="date" value={form.data_devolucao} onChange={e => setForm({ ...form, data_devolucao: e.target.value })} /></div>
            <div><Label>Tempo (horas)</Label><Input type="number" value={form.tempo_locacao_horas} onChange={e => setForm({ ...form, tempo_locacao_horas: Number(e.target.value) })} /></div>
            <div><Label>Valor total (R$)</Label><Input type="number" step="0.01" value={form.valor_total} onChange={e => setForm({ ...form, valor_total: Number(e.target.value) })} /></div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(null)}>Cancelar</Button>
            <Button onClick={async () => { if (!open) return; await locacoesApi.finalizar(open.id_locacao, form); toast.success("Finalizada"); setOpen(null); refresh(); }}>Finalizar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
