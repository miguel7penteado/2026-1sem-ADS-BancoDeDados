import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Accessibility, BatteryCharging, ShieldCheck, Leaf, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VoltDrive — Locação de Veículos Elétricos" },
      { name: "description", content: "Plataforma de agendamento e locação de veículos 100% elétricos com foco em conforto, acessibilidade e sustentabilidade." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg gradient-hero grid place-items-center text-primary-foreground">
              <Zap className="w-5 h-5" />
            </div>
            <span className="font-semibold text-lg">VoltDrive</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/login"><Button variant="ghost">Entrar</Button></Link>
            <Link to="/cliente"><Button variant="outline">Área do Cliente</Button></Link>
            <Link to="/admin"><Button>Área Admin</Button></Link>
          </div>
        </div>
      </header>

      <section className="gradient-hero text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider bg-white/15 rounded-full px-3 py-1 mb-4">
              <Leaf className="w-3 h-3" /> Mobilidade sustentável
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Dirija o futuro. Loque um veículo 100% elétrico.
            </h1>
            <p className="mt-4 text-lg opacity-90">
              Reserve em minutos, escolha o conforto ideal e acompanhe tudo em um painel simples e acessível.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/cliente/veiculos">
                <Button size="lg" variant="secondary">
                  Ver veículos disponíveis <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white/10">
                  Fazer login
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-2 gap-4">
            {[
              { icon: BatteryCharging, t: "Até 500 km", d: "de autonomia" },
              { icon: Accessibility, t: "Acessível", d: "para todos" },
              { icon: ShieldCheck, t: "Inspecionado", d: "sempre revisado" },
              { icon: Leaf, t: "Zero emissões", d: "energia limpa" },
            ].map((f, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20">
                <f.icon className="w-7 h-7 mb-2" />
                <div className="font-semibold">{f.t}</div>
                <div className="text-sm opacity-80">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Por que escolher a VoltDrive?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Acessibilidade", d: "Cadastre suas necessidades e receba veículos adaptados ao seu perfil." },
            { t: "Conforto sob medida", d: "Filtre por nível de conforto, som, câmbio e adequação para viagens." },
            { t: "Pagamento simples", d: "Acompanhe seus pagamentos e simule confirmações em poucos cliques." },
          ].map((c, i) => (
            <Card key={i} className="gradient-card">
              <CardContent className="p-6">
                <div className="text-primary font-semibold mb-2">{c.t}</div>
                <p className="text-sm text-muted-foreground">{c.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © 2026 VoltDrive — Tecnologia para mobilidade elétrica
      </footer>
    </div>
  );
}
