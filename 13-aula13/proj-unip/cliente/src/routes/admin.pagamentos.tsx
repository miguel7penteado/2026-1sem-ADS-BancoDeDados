import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { pagamentosApi } from "@/services/api";
import type { Pagamento } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/StatusBadge";
import { Check } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/pagamentos")({ component: PagamentosAdmin });

function PagamentosAdmin() {
  const [items, setItems] = useState<Pagamento[]>([]);
  const refresh = () => pagamentosApi.list().then(setItems);
  useEffect(() => { refresh(); }, []);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Pagamentos</h1>
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
                    <Button size="sm" onClick={async () => { await pagamentosApi.confirmar(p.id_pagamento); toast.success("Confirmado"); refresh(); }}>
                      <Check className="w-4 h-4 mr-1" />Confirmar
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
            {items.length === 0 && <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">Nenhum pagamento</TableCell></TableRow>}
          </TableBody>
        </Table>
      </CardContent></Card>
    </div>
  );
}
