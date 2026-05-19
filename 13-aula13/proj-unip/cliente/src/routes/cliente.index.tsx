import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { agendamentosApi, locacoesApi, pagamentosApi, veiculosApi } from "@/services/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, FileText, CreditCard, Car, Plus, MessageSquare } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

export const Route = createFileRoute("/cliente/")({ component: ClienteHome });

function ClienteHome() {
  const { user } = useAuth();
  const id = user?.id_cliente ?? 1;
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const [ags, locs, pags, veis] = await Promise.all([
        agendamentosApi.listByCliente(id), locacoesApi.list(), pagamentosApi.list(), veiculosApi.disponiveis(),
      ]);
      const meusAgIds = ags.map(a => a.id_agendamento);
      const minhasLocs = locs.filter(l => meusAgIds.includes(l.id_agendamento));
      const minhasLocsIds = minhasLocs.map(l => l.id_locacao);
      const meusPags = pags.filter(p => minhasLocsIds.includes(p.id_locacao));
      setData({ ags, minhasLocs, meusPags, veis: veis.slice(0, 3) });
    })();
  }, [id]);

  if (!data) return <div className="text-muted-foreground">Carregando…</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold">Olá, {user?.nome} 👋</h1>
          <p className="text-muted-foreground text-sm">Bem-vindo de volta ao seu painel</p>
        </div>
        <div className="flex gap-2">
          <Link to="/cliente/atendimento"><Button variant="outline"><MessageSquare className="w-4 h-4 mr-2" />Abrir chat</Button></Link>
          <Link to="/cliente/agendamentos/novo"><Button><Plus className="w-4 h-4 mr-2" />Novo agendamento</Button></Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card><CardContent className="p-5"><CalendarDays className="w-5 h-5 text-primary mb-2" /><div className="text-2xl font-bold">{data.ags.length}</div><div className="text-sm text-muted-foreground">Agendamentos</div></CardContent></Card>
        <Card><CardContent className="p-5"><FileText className="w-5 h-5 text-primary mb-2" /><div className="text-2xl font-bold">{data.minhasLocs.filter((l: any) => l.status_locacao === "em_andamento").length}</div><div className="text-sm text-muted-foreground">Locações ativas</div></CardContent></Card>
        <Card><CardContent className="p-5"><CreditCard className="w-5 h-5 text-primary mb-2" /><div className="text-2xl font-bold">{data.meusPags.filter((p: any) => p.status_pagamento === "pendente").length}</div><div className="text-sm text-muted-foreground">Pagamentos pendentes</div></CardContent></Card>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Card><CardContent className="p-5">
          <h3 className="font-semibold mb-3">Próximos agendamentos</h3>
          {data.ags.slice(0, 3).map((a: any) => (
            <div key={a.id_agendamento} className="flex items-center justify-between py-2 border-b last:border-0">
              <div><div className="text-sm font-medium">{a.data_inicio} → {a.data_fim}</div><div className="text-xs text-muted-foreground capitalize">{a.periodo}</div></div>
              <StatusBadge status={a.status_agendamento} />
            </div>
          ))}
          {data.ags.length === 0 && <div className="text-sm text-muted-foreground">Nada por aqui</div>}
        </CardContent></Card>

        <Card><CardContent className="p-5">
          <h3 className="font-semibold mb-3">Veículos recomendados</h3>
          <div className="space-y-3">
            {data.veis.map((v: any) => (
              <Link key={v.id_veiculo} to="/cliente/veiculos/$id" params={{ id: String(v.id_veiculo) }} className="flex items-center gap-3 p-2 rounded hover:bg-muted">
                <div className="w-10 h-10 rounded bg-primary/10 grid place-items-center"><Car className="w-5 h-5 text-primary" /></div>
                <div className="flex-1"><div className="font-medium text-sm">{v.marca} {v.modelo}</div><div className="text-xs text-muted-foreground">{v.autonomia_km} km · {v.tipo_cambio}</div></div>
                <Button size="sm" variant="ghost">Ver</Button>
              </Link>
            ))}
          </div>
        </CardContent></Card>
      </div>
    </div>
  );
}
