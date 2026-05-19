import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { agendamentosApi, locacoesApi, veiculosApi } from "@/services/api";
import type { Locacao, Veiculo } from "@/lib/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/StatusBadge";

export const Route = createFileRoute("/cliente/locacoes")({ component: MinhasLocacoes });

function MinhasLocacoes() {
  const { user } = useAuth();
  const id = user?.id_cliente ?? 1;
  const [items, setItems] = useState<(Locacao & { veiculo: string })[]>([]);
  useEffect(() => {
    (async () => {
      const [ags, locs, vs] = await Promise.all([agendamentosApi.listByCliente(id), locacoesApi.list(), veiculosApi.list()]);
      const meus = ags.map(a => a.id_agendamento);
      setItems(locs.filter(l => meus.includes(l.id_agendamento)).map(l => {
        const a = ags.find(a => a.id_agendamento === l.id_agendamento);
        const v = vs.find(v => v.id_veiculo === a?.id_veiculo);
        return { ...l, veiculo: v ? `${v.marca} ${v.modelo}` : "—" };
      }));
    })();
  }, [id]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Minhas locações</h1>
      <Card><CardContent className="p-4">
        <Table>
          <TableHeader><TableRow>
            <TableHead>Veículo</TableHead><TableHead>Retirada</TableHead><TableHead>Devolução</TableHead>
            <TableHead>Tempo (h)</TableHead><TableHead>Valor</TableHead><TableHead>Status</TableHead>
          </TableRow></TableHeader>
          <TableBody>
            {items.map(l => (
              <TableRow key={l.id_locacao}>
                <TableCell>{l.veiculo}</TableCell>
                <TableCell>{l.data_retirada.slice(0, 10)}</TableCell>
                <TableCell>{l.data_devolucao?.slice(0, 10) ?? "—"}</TableCell>
                <TableCell>{l.tempo_locacao_horas}</TableCell>
                <TableCell>R$ {l.valor_total.toFixed(2)}</TableCell>
                <TableCell><StatusBadge status={l.status_locacao} /></TableCell>
              </TableRow>
            ))}
            {items.length === 0 && <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">Sem locações</TableCell></TableRow>}
          </TableBody>
        </Table>
      </CardContent></Card>
    </div>
  );
}
