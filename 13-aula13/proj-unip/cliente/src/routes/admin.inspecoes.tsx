import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { inspecoesApi, veiculosApi } from "@/services/api";
import type { Inspecao, Veiculo } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { StatusBadge } from "@/components/StatusBadge";
import { Plus } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/inspecoes")({ component: InspecoesAdmin });

function InspecoesAdmin() {
  const [items, setItems] = useState<Inspecao[]>([]);
  const [vs, setVs] = useState<Veiculo[]>([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ id_veiculo: 0, observacoes: "" });
  const refresh = () => Promise.all([inspecoesApi.list(), veiculosApi.list()]).then(([i, v]) => { setItems(i); setVs(v); });
  useEffect(() => { refresh(); }, []);
  const vei = (id: number) => { const v = vs.find(v => v.id_veiculo === id); return v ? `${v.marca} ${v.modelo}` : "—"; };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Inspeções</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild><Button><Plus className="w-4 h-4 mr-2" />Abrir inspeção</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Nova inspeção</DialogTitle></DialogHeader>
            <div className="space-y-3">
              <div>
                <Label>Veículo</Label>
                <Select value={String(form.id_veiculo || "")} onValueChange={v => setForm({ ...form, id_veiculo: Number(v) })}>
                  <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                  <SelectContent>{vs.map(v => <SelectItem key={v.id_veiculo} value={String(v.id_veiculo)}>{v.marca} {v.modelo} ({v.placa})</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div><Label>Observações</Label><Textarea value={form.observacoes} onChange={e => setForm({ ...form, observacoes: e.target.value })} /></div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button>
              <Button onClick={async () => { if (!form.id_veiculo) return; await inspecoesApi.abrir(form.id_veiculo, form.observacoes); toast.success("Inspeção aberta"); setOpen(false); setForm({ id_veiculo: 0, observacoes: "" }); refresh(); }}>Abrir</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card><CardContent className="p-4">
        <Table>
          <TableHeader><TableRow>
            <TableHead>Veículo</TableHead><TableHead>Início</TableHead><TableHead>Fim</TableHead>
            <TableHead>Status</TableHead><TableHead>Observações</TableHead><TableHead className="text-right">Ações</TableHead>
          </TableRow></TableHeader>
          <TableBody>
            {items.map(i => (
              <TableRow key={i.id_inspecao}>
                <TableCell>{vei(i.id_veiculo)}</TableCell>
                <TableCell>{i.data_inicio.slice(0, 10)}</TableCell>
                <TableCell>{i.data_fim?.slice(0, 10) ?? "—"}</TableCell>
                <TableCell><StatusBadge status={i.status_inspecao} /></TableCell>
                <TableCell className="text-muted-foreground text-sm">{i.observacoes}</TableCell>
                <TableCell className="text-right">
                  {i.status_inspecao === "em_inspecao" && (
                    <Button size="sm" onClick={async () => { await inspecoesApi.finalizar(i.id_inspecao); toast.success("Finalizada"); refresh(); }}>Finalizar</Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
            {items.length === 0 && <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">Nenhuma inspeção</TableCell></TableRow>}
          </TableBody>
        </Table>
      </CardContent></Card>
    </div>
  );
}
