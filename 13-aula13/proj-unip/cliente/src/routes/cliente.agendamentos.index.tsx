import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { agendamentosApi, veiculosApi } from "@/services/api";
import type { Agendamento, Veiculo } from "@/lib/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/StatusBadge";
import { Plus } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/cliente/agendamentos/")({ component: MeusAgendamentos });

function MeusAgendamentos() {
  const { user } = useAuth();
  const id = user?.id_cliente ?? 1;
  const [items, setItems] = useState<Agendamento[]>([]);
  const [vs, setVs] = useState<Veiculo[]>([]);
  const refresh = () => Promise.all([agendamentosApi.listByCliente(id), veiculosApi.list()]).then(([a, v]) => { setItems(a); setVs(v); });
  useEffect(() => { refresh(); }, [id]);
  const vei = (vid: number) => { const v = vs.find(v => v.id_veiculo === vid); return v ? `${v.marca} ${v.modelo}` : "—"; };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Meus agendamentos</h1>
        <Link to="/cliente/agendamentos/novo"><Button><Plus className="w-4 h-4 mr-2" />Novo</Button></Link>
      </div>
      <Card><CardContent className="p-4">
        <Table>
          <TableHeader><TableRow>
            <TableHead>Veículo</TableHead><TableHead>Início</TableHead><TableHead>Fim</TableHead>
            <TableHead>Período</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Ações</TableHead>
          </TableRow></TableHeader>
          <TableBody>
            {items.map(a => (
              <TableRow key={a.id_agendamento}>
                <TableCell>{vei(a.id_veiculo)}</TableCell>
                <TableCell>{a.data_inicio}</TableCell>
                <TableCell>{a.data_fim}</TableCell>
                <TableCell className="capitalize">{a.periodo}</TableCell>
                <TableCell><StatusBadge status={a.status_agendamento} /></TableCell>
                <TableCell className="text-right">
                  {a.status_agendamento === "pendente" && (
                    <Button size="sm" variant="outline" onClick={async () => { await agendamentosApi.cancelar(a.id_agendamento); toast.success("Cancelado"); refresh(); }}>Cancelar</Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
            {items.length === 0 && <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">Sem agendamentos</TableCell></TableRow>}
          </TableBody>
        </Table>
      </CardContent></Card>
    </div>
  );
}
