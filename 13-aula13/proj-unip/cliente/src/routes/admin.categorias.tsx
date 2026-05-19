import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { categoriasApi } from "@/services/api";
import type { CategoriaVeiculo } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/categorias")({ component: CategoriasAdmin });

function CategoriasAdmin() {
  const [items, setItems] = useState<CategoriaVeiculo[]>([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<CategoriaVeiculo | null>(null);
  const [form, setForm] = useState({ nome_categoria: "", descricao: "" });

  const refresh = () => categoriasApi.list().then(setItems);
  useEffect(() => { refresh(); }, []);

  const submit = async () => {
    if (editing) await categoriasApi.update(editing.id_categoria, form);
    else await categoriasApi.create(form);
    toast.success("Salvo"); setOpen(false); setEditing(null); setForm({ nome_categoria: "", descricao: "" }); refresh();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Categorias</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild><Button onClick={() => { setEditing(null); setForm({ nome_categoria: "", descricao: "" }); }}><Plus className="w-4 h-4 mr-2" />Nova Categoria</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>{editing ? "Editar" : "Nova"} categoria</DialogTitle></DialogHeader>
            <div className="space-y-3">
              <div><Label>Nome</Label><Input value={form.nome_categoria} onChange={e => setForm({ ...form, nome_categoria: e.target.value })} /></div>
              <div><Label>Descrição</Label><Textarea value={form.descricao} onChange={e => setForm({ ...form, descricao: e.target.value })} /></div>
            </div>
            <DialogFooter><Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button><Button onClick={submit}>Salvar</Button></DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Card><CardContent className="p-4">
        <Table>
          <TableHeader><TableRow><TableHead>Nome</TableHead><TableHead>Descrição</TableHead><TableHead className="text-right">Ações</TableHead></TableRow></TableHeader>
          <TableBody>
            {items.map(c => (
              <TableRow key={c.id_categoria}>
                <TableCell className="font-medium">{c.nome_categoria}</TableCell>
                <TableCell className="text-muted-foreground">{c.descricao}</TableCell>
                <TableCell className="text-right space-x-1">
                  <Button size="icon" variant="ghost" onClick={() => { setEditing(c); setForm({ nome_categoria: c.nome_categoria, descricao: c.descricao }); setOpen(true); }}><Pencil className="w-4 h-4" /></Button>
                  <Button size="icon" variant="ghost" onClick={async () => { await categoriasApi.remove(c.id_categoria); toast.success("Removido"); refresh(); }}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent></Card>
    </div>
  );
}
