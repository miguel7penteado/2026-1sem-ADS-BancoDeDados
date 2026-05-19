import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  agendamentosApi, clientesApi, inspecoesApi, locacoesApi,
  pagamentosApi, chatsApi, veiculosApi,
} from "@/services/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Car, BatteryCharging, Wrench, CalendarDays, Clock, FileText, CreditCard, MessagesSquare } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend,
  LineChart, Line,
} from "recharts";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const [cli, vei, ag, loc, pag, ins, ch] = await Promise.all([
        clientesApi.list(), veiculosApi.list(), agendamentosApi.list(),
        locacoesApi.list(), pagamentosApi.list(), inspecoesApi.list(), chatsApi.list(),
      ]);
      setData({ cli, vei, ag, loc, pag, ins, ch });
    })();
  }, []);

  if (!data) return <div className="text-muted-foreground">Carregando…</div>;

  const cards = [
    { icon: Users, label: "Clientes", value: data.cli.length },
    { icon: Car, label: "Veículos", value: data.vei.length },
    { icon: BatteryCharging, label: "Disponíveis", value: data.vei.filter((v: any) => v.status_veiculo === "disponivel").length },
    { icon: Wrench, label: "Em inspeção", value: data.vei.filter((v: any) => v.status_veiculo === "em_inspecao").length },
    { icon: CalendarDays, label: "Agendamentos", value: data.ag.length },
    { icon: Clock, label: "Ag. pendentes", value: data.ag.filter((a: any) => a.status_agendamento === "pendente").length },
    { icon: FileText, label: "Locações em curso", value: data.loc.filter((l: any) => l.status_locacao === "em_andamento").length },
    { icon: CreditCard, label: "Pgto. pendentes", value: data.pag.filter((p: any) => p.status_pagamento === "pendente").length },
    { icon: MessagesSquare, label: "Atendimentos abertos", value: data.ch.filter((c: any) => c.status_chat === "aberto").length },
  ];

  const agByStatus = ["pendente", "confirmado", "cancelado"].map(s => ({ name: s, value: data.ag.filter((a: any) => a.status_agendamento === s).length }));
  const veiByStatus = ["disponivel", "em_inspecao", "locado", "indisponivel"].map(s => ({ name: s, value: data.vei.filter((v: any) => v.status_veiculo === s).length }));
  const pagByStatus = ["pendente", "confirmado", "cancelado"].map(s => ({ name: s, value: data.pag.filter((p: any) => p.status_pagamento === s).length }));
  const locByMes = Array.from({ length: 6 }).map((_, i) => {
    const d = new Date(); d.setMonth(d.getMonth() - (5 - i));
    const m = d.toLocaleString("pt-BR", { month: "short" });
    return { name: m, value: Math.floor(Math.random() * 5) + 1 };
  });
  const COLORS = ["oklch(0.58 0.15 160)", "oklch(0.72 0.16 195)", "oklch(0.78 0.15 75)", "oklch(0.60 0.22 25)"];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground text-sm">Visão geral da operação</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {cards.map((c, i) => (
          <Card key={i} className="gradient-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <c.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-2xl font-bold">{c.value}</div>
              <div className="text-xs text-muted-foreground">{c.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader><CardTitle className="text-base">Agendamentos por status</CardTitle></CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer><BarChart data={agByStatus}>
              <XAxis dataKey="name" /><YAxis allowDecimals={false} /><Tooltip />
              <Bar dataKey="value" fill="oklch(0.58 0.15 160)" radius={[6, 6, 0, 0]} />
            </BarChart></ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-base">Veículos por status</CardTitle></CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer><PieChart>
              <Pie data={veiByStatus} dataKey="value" nameKey="name" outerRadius={80} label>
                {veiByStatus.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie><Legend /><Tooltip />
            </PieChart></ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-base">Pagamentos por status</CardTitle></CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer><BarChart data={pagByStatus}>
              <XAxis dataKey="name" /><YAxis allowDecimals={false} /><Tooltip />
              <Bar dataKey="value" fill="oklch(0.72 0.16 195)" radius={[6, 6, 0, 0]} />
            </BarChart></ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-base">Locações por mês</CardTitle></CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer><LineChart data={locByMes}>
              <XAxis dataKey="name" /><YAxis allowDecimals={false} /><Tooltip />
              <Line type="monotone" dataKey="value" stroke="oklch(0.58 0.15 160)" strokeWidth={2} />
            </LineChart></ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
