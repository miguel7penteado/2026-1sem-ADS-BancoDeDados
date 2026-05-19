import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { categoriasApi, inspecoesApi, veiculosApi } from "@/services/api";
import type { CategoriaVeiculo, Veiculo } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Pencil, Plus, Trash2, BatteryCharging, Wrench, Car } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/veiculos")({ component: VeiculosAdmin });

const emptyV: Omit<Veiculo, "id_veiculo"> = {
  id_categoria: 1, marca: "", modelo: "", placa: "", ano: 2024, autonomia_km: 300,
  tipo_cambio: "automatico", possui_som: true, nivel_conforto: "intermediario",
  adequado_viagem: false, status_veiculo: "disponivel",
};

function VeiculosAdmin() {
  const [items, setItems] = useState<Veiculo[]>([]);
  const [cats, setCats] = useState<CategoriaVeiculo[]>([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Veiculo | null>(null);
  const [form, setForm] = useState<Omit<Veiculo, "id_veiculo">>(emptyV);
  const [fStatus, setFStatus] = useState<string>("todos");
  const [fCat, setFCat] = useState<string>("todas");
  const [fViagem, setFViagem] = useState<string>("todos");
  const [fConf, setFConf] = useState<string>("todos");

  const refresh = () => { veiculosApi.list().then(setItems); categoriasApi.list().then(setCats); };
  useEffect(() => { refresh(); }, []);

  const catNome = (id: number) => cats.find(c => c.id_categoria === id)?.nome_categoria ?? "—";

  const filtered = useMemo(() => items.filter(v =>
    (fStatus === "todos" || v.status_veiculo === fStatus) &&
    (fCat === "todas" || v.id_categoria === Number(fCat)) &&
    (fViagem === "todos" || (fViagem === "sim" ? v.adequado_viagem : !v.adequado_viagem)) &&
    (fConf === "todos" || v.nivel_conforto === fConf)
  ), [items, fStatus, fCat, fViagem, fConf]);

  const submit = async () => {
    if (editing) await veiculosApi.update(editing.id_veiculo, form);
    else await veiculosApi.create(form);
    toast.success("Salvo"); setOpen(false); setEditing(null); setForm(emptyV); refresh();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Veículos</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild><Button onClick={() => { setEditing(null); setForm(emptyV); }}><Plus className="w-4 h-4 mr-2" />Novo Veículo</Button></DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader><DialogTitle>{editing ? "Editar" : "Novo"} veículo</DialogTitle></DialogHeader>
            <div className="grid grid-cols-2 gap-3">
              <div><Label>Marca</Label><Input value={form.marca} onChange={e => setForm({ ...form, marca: e.target.value })} /></div>
              <div><Label>Modelo</Label><Input value={form.modelo} onChange={e => setForm({ ...form, modelo: e.target.value })} /></div>
              <div><Label>Placa</Label><Input value={form.placa} onChange={e => setForm({ ...form, placa: e.target.value })} /></div>
              <div><Label>Ano</Label><Input type="number" value={form.ano} onChange={e => setForm({ ...form, ano: Number(e.target.value) })} /></div>
              <div><Label>Autonomia (km)</Label><Input type="number" value={form.autonomia_km} onChange={e => setForm({ ...form, autonomia_km: Number(e.target.value) })} /></div>
              <div>
                <Label>Categoria</Label>
                <Select value={String(form.id_categoria)} onValueChange={v => setForm({ ...form, id_categoria: Number(v) })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>{cats.map(c => <SelectItem key={c.id_categoria} value={String(c.id_categoria)}>{c.nome_categoria}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div>
                <Label>Câmbio</Label>
                <Select value={form.tipo_cambio} onValueChange={v => setForm({ ...form, tipo_cambio: v as any })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent><SelectItem value="automatico">Automático</SelectItem><SelectItem value="manual">Manual</SelectItem></SelectContent>
                </Select>
              </div>
              <div>
                <Label>Nível de conforto</Label>
                <Select value={form.nivel_conforto} onValueChange={v => setForm({ ...form, nivel_conforto: v as any })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent><SelectItem value="basico">Básico</SelectItem><SelectItem value="intermediario">Intermediário</SelectItem><SelectItem value="alto">Alto</SelectItem></SelectContent>
                </Select>
              </div>
              <div>
                <Label>Status</Label>
                <Select value={form.status_veiculo} onValueChange={v => setForm({ ...form, status_veiculo: v as any })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="disponivel">Disponível</SelectItem>
                    <SelectItem value="em_inspecao">Em inspeção</SelectItem>
                    <SelectItem value="locado">Locado</SelectItem>
                    <SelectItem value="indisponivel">Indisponível</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between border rounded-md p-3 col-span-1"><Label>Possui som</Label><Switch checked={form.possui_som} onCheckedChange={v => setForm({ ...form, possui_som: v })} /></div>
              <div className="flex items-center justify-between border rounded-md p-3 col-span-1"><Label>Adequado p/ viagem</Label><Switch checked={form.adequado_viagem} onCheckedChange={v => setForm({ ...form, adequado_viagem: v })} /></div>
            </div>
            <DialogFooter><Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button><Button onClick={submit}>Salvar</Button></DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card><CardContent className="p-4 space-y-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <Select value={fStatus} onValueChange={setFStatus}>
            <SelectTrigger><SelectValue placeholder="Status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos status</SelectItem>
              <SelectItem value="disponivel">Disponível</SelectItem>
              <SelectItem value="em_inspecao">Em inspeção</SelectItem>
              <SelectItem value="locado">Locado</SelectItem>
              <SelectItem value="indisponivel">Indisponível</SelectItem>
            </SelectContent>
          </Select>
          <Select value={fCat} onValueChange={setFCat}>
            <SelectTrigger><SelectValue placeholder="Categoria" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Todas categorias</SelectItem>
              {cats.map(c => <SelectItem key={c.id_categoria} value={String(c.id_categoria)}>{c.nome_categoria}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={fViagem} onValueChange={setFViagem}>
            <SelectTrigger><SelectValue placeholder="Viagem" /></SelectTrigger>
            <SelectContent><SelectItem value="todos">Todos</SelectItem><SelectItem value="sim">Adequado p/ viagem</SelectItem><SelectItem value="nao">Cidade</SelectItem></SelectContent>
          </Select>
          <Select value={fConf} onValueChange={setFConf}>
            <SelectTrigger><SelectValue placeholder="Conforto" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos conforto</SelectItem>
              <SelectItem value="basico">Básico</SelectItem>
              <SelectItem value="intermediario">Intermediário</SelectItem>
              <SelectItem value="alto">Alto</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Table>
          <TableHeader><TableRow>
            <TableHead>Veículo</TableHead><TableHead>Categoria</TableHead><TableHead>Placa</TableHead>
            <TableHead>Autonomia</TableHead><TableHead>Câmbio</TableHead><TableHead>Conforto</TableHead>
            <TableHead>Status</TableHead><TableHead className="text-right">Ações</TableHead>
          </TableRow></TableHeader>
          <TableBody>
            {filtered.map(v => (
              <TableRow key={v.id_veiculo}>
                <TableCell><div className="flex items-center gap-2"><div className="w-8 h-8 rounded bg-primary/10 grid place-items-center"><Car className="w-4 h-4 text-primary" /></div><div><div className="font-medium">{v.marca} {v.modelo}</div><div className="text-xs text-muted-foreground">{v.ano}</div></div></div></TableCell>
                <TableCell>{catNome(v.id_categoria)}</TableCell>
                <TableCell className="font-mono text-xs">{v.placa}</TableCell>
                <TableCell>{v.autonomia_km} km</TableCell>
                <TableCell className="capitalize">{v.tipo_cambio}</TableCell>
                <TableCell className="capitalize">{v.nivel_conforto}</TableCell>
                <TableCell><StatusBadge status={v.status_veiculo} /></TableCell>
                <TableCell className="text-right space-x-1">
                  <Button size="icon" variant="ghost" title="Marcar disponível" onClick={async () => { await veiculosApi.update(v.id_veiculo, { status_veiculo: "disponivel" }); toast.success("Disponível"); refresh(); }}><BatteryCharging className="w-4 h-4" /></Button>
                  <Button size="icon" variant="ghost" title="Abrir inspeção" onClick={async () => { await inspecoesApi.abrir(v.id_veiculo, "Inspeção solicitada"); toast.success("Inspeção aberta"); refresh(); }}><Wrench className="w-4 h-4" /></Button>
                  <Button size="icon" variant="ghost" onClick={() => { setEditing(v); setForm(v); setOpen(true); }}><Pencil className="w-4 h-4" /></Button>
                  <Button size="icon" variant="ghost" onClick={async () => { await veiculosApi.remove(v.id_veiculo); toast.success("Removido"); refresh(); }}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent></Card>
    </div>
  );
}
