import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { agendamentosApi, clientesApi, locacoesApi, veiculosApi } from "@/services/api";
import type { Agendamento, Cliente, Veiculo } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/StatusBadge";
import { Check, X, FileText, Eye } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/agendamentos")({ component: AgendamentosAdmin });

function AgendamentosAdmin() {
  const [items, setItems] = useState<Agendamento[]>([]);
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);

  const refresh = () => Promise.all([agendamentosApi.list(), clientesApi.list(), veiculosApi.list()])
    .then(([a, c, v]) => { setItems(a); setClientes(c); setVeiculos(v); });
  useEffect(() => { refresh(); }, []);

  const cli = (id: number) => clientes.find(c => c.id_cliente === id)?.nome ?? "—";
  const vei = (id: number) => { const v = veiculos.find(v => v.id_veiculo === id); return v ? `${v.marca} ${v.modelo}` : "—"; };

  const toLocacao = async (a: Agendamento) => {
    const horas = (new Date(a.data_fim).getTime() - new Date(a.data_inicio).getTime()) / 3.6e6 || 24;
    await locacoesApi.create({
      id_agendamento: a.id_agendamento, data_retirada: a.data_inicio,
      data_devolucao: null, tempo_locacao_horas: horas, valor_total: horas * 25,
      status_locacao: "em_andamento",
    });
    toast.success("Locação criada");
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Agendamentos</h1>
      <Card><CardContent className="p-4">
        <Table>
          <TableHeader><TableRow>
            <TableHead>Cliente</TableHead><TableHead>Veículo</TableHead><TableHead>Início</TableHead>
            <TableHead>Fim</TableHead><TableHead>Período</TableHead><TableHead>Status</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow></TableHeader>
          <TableBody>
            {items.map(a => (
              <TableRow key={a.id_agendamento}>
                <TableCell>{cli(a.id_cliente)}</TableCell>
                <TableCell>{vei(a.id_veiculo)}</TableCell>
                <TableCell>{a.data_inicio}</TableCell>
                <TableCell>{a.data_fim}</TableCell>
                <TableCell className="capitalize">{a.periodo}</TableCell>
                <TableCell><StatusBadge status={a.status_agendamento} /></TableCell>
                <TableCell className="text-right space-x-1">
                  <Button size="icon" variant="ghost" onClick={() => toast.info(`${cli(a.id_cliente)} • ${vei(a.id_veiculo)}`)}><Eye className="w-4 h-4" /></Button>
                  <Button size="icon" variant="ghost" title="Confirmar" onClick={async () => { await agendamentosApi.confirmar(a.id_agendamento); toast.success("Confirmado"); refresh(); }}><Check className="w-4 h-4 text-success" /></Button>
                  <Button size="icon" variant="ghost" title="Cancelar" onClick={async () => { await agendamentosApi.cancelar(a.id_agendamento); toast.success("Cancelado"); refresh(); }}><X className="w-4 h-4 text-destructive" /></Button>
                  <Button size="icon" variant="ghost" title="Transformar em locação" onClick={() => toLocacao(a).then(refresh)}><FileText className="w-4 h-4" /></Button>
                </TableCell>
              </TableRow>
            ))}
            {items.length === 0 && <TableRow><TableCell colSpan={7} className="text-center text-muted-foreground py-8">Nenhum agendamento</TableCell></TableRow>}
          </TableBody>
        </Table>
      </CardContent></Card>
    </div>
  );
}
