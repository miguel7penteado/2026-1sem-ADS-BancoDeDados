import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { agendamentosApi, locacoesApi, pagamentosApi } from "@/services/api";
import type { Pagamento } from "@/lib/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/StatusBadge";
import { toast } from "sonner";

export const Route = createFileRoute("/cliente/pagamentos")({ component: MeusPagamentos });

function MeusPagamentos() {
  const { user } = useAuth();
  const id = user?.id_cliente ?? 1;
  const [items, setItems] = useState<Pagamento[]>([]);
  const refresh = async () => {
    const [ags, locs, pags] = await Promise.all([agendamentosApi.listByCliente(id), locacoesApi.list(), pagamentosApi.list()]);
    const myAg = ags.map(a => a.id_agendamento);
    const myLoc = locs.filter(l => myAg.includes(l.id_agendamento)).map(l => l.id_locacao);
    setItems(pags.filter(p => myLoc.includes(p.id_locacao)));
  };
  useEffect(() => { refresh(); }, [id]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Meus pagamentos</h1>
      <Card><CardContent className="p-4">
        <Table>
          <TableHeader><TableRow>
            <TableHead>Locação</TableHead><TableHead>Valor</TableHead><TableHead>Forma</TableHead>
            <TableHead>Data</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Ações</TableHead>
          </TableRow></TableHeader>
          <TableBody>
            {items.map(p => (
              <TableRow key={p.id_pagamento}>
                <TableCell>#{p.id_locacao}</TableCell>
                <TableCell>R$ {p.valor_pago.toFixed(2)}</TableCell>
                <TableCell className="capitalize">{p.forma_pagamento}</TableCell>
                <TableCell>{p.data_pagamento}</TableCell>
                <TableCell><StatusBadge status={p.status_pagamento} /></TableCell>
                <TableCell className="text-right">
                  {p.status_pagamento === "pendente" && (
                    <Button size="sm" onClick={async () => { await pagamentosApi.confirmar(p.id_pagamento); toast.success("Pagamento simulado com sucesso"); refresh(); }}>Simular pagamento</Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
            {items.length === 0 && <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">Sem pagamentos</TableCell></TableRow>}
          </TableBody>
        </Table>
      </CardContent></Card>
    </div>
  );
}
