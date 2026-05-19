import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { clientesApi } from "@/services/api";
import type { Cliente } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Pencil, Plus, Trash2, Eye } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/clientes")({ component: ClientesAdmin });

const empty: Omit<Cliente, "id_cliente"> = { nome: "", email: "", telefone: "", cpf: "", necessidades_acessibilidade: "" };

function ClientesAdmin() {
  const [items, setItems] = useState<Cliente[]>([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Cliente | null>(null);
  const [form, setForm] = useState<Omit<Cliente, "id_cliente">>(empty);

  const refresh = () => clientesApi.list().then(setItems);
  useEffect(() => { refresh(); }, []);

  const submit = async () => {
    if (editing) { await clientesApi.update(editing.id_cliente, form); toast.success("Cliente atualizado"); }
    else { await clientesApi.create(form); toast.success("Cliente criado"); }
    setOpen(false); setEditing(null); setForm(empty); refresh();
  };
  const del = async (id: number) => { await clientesApi.remove(id); toast.success("Removido"); refresh(); };
  const startEdit = (c: Cliente) => { setEditing(c); setForm(c); setOpen(true); };
  const startNew = () => { setEditing(null); setForm(empty); setOpen(true); };

  const filtered = items.filter(c => c.nome.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Clientes</h1>
          <p className="text-muted-foreground text-sm">Gerenciar cadastros</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild><Button onClick={startNew}><Plus className="w-4 h-4 mr-2" />Novo Cliente</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>{editing ? "Editar" : "Novo"} cliente</DialogTitle></DialogHeader>
            <div className="space-y-3">
              {(["nome", "email", "telefone", "cpf", "necessidades_acessibilidade"] as const).map(f => (
                <div key={f} className="space-y-1">
                  <Label htmlFor={f} className="capitalize">{f.replace(/_/g, " ")}</Label>
                  <Input id={f} value={(form as any)[f]} onChange={e => setForm({ ...form, [f]: e.target.value })} />
                </div>
              ))}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button>
              <Button onClick={submit}>Salvar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardContent className="p-4 space-y-3">
          <Input placeholder="Buscar por nome ou e-mail" value={search} onChange={e => setSearch(e.target.value)} className="max-w-sm" />
          <Table>
            <TableHeader>
              <TableRow><TableHead>Nome</TableHead><TableHead>Email</TableHead><TableHead>Telefone</TableHead><TableHead>CPF</TableHead><TableHead>Acessibilidade</TableHead><TableHead className="text-right">Ações</TableHead></TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map(c => (
                <TableRow key={c.id_cliente}>
                  <TableCell className="font-medium">{c.nome}</TableCell>
                  <TableCell>{c.email}</TableCell>
                  <TableCell>{c.telefone}</TableCell>
                  <TableCell>{c.cpf}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{c.necessidades_acessibilidade || "—"}</TableCell>
                  <TableCell className="text-right space-x-1">
                    <Button size="icon" variant="ghost" onClick={() => toast.info(`${c.nome} — ${c.email}`)}><Eye className="w-4 h-4" /></Button>
                    <Button size="icon" variant="ghost" onClick={() => startEdit(c)}><Pencil className="w-4 h-4" /></Button>
                    <Button size="icon" variant="ghost" onClick={() => del(c.id_cliente)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                  </TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">Nenhum cliente</TableCell></TableRow>}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
