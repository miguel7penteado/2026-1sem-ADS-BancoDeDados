import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { categoriasApi, veiculosApi } from "@/services/api";
import type { CategoriaVeiculo, Veiculo } from "@/lib/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, BatteryCharging, Music, Plane, Settings2, ArrowLeft } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

export const Route = createFileRoute("/cliente/veiculos/$id")({ component: VeiculoDetalhe });

function VeiculoDetalhe() {
  const { id } = Route.useParams();
  const [v, setV] = useState<Veiculo | null>(null);
  const [cats, setCats] = useState<CategoriaVeiculo[]>([]);
  useEffect(() => {
    veiculosApi.get(Number(id)).then(x => setV(x ?? null));
    categoriasApi.list().then(setCats);
  }, [id]);

  if (!v) return <div className="text-muted-foreground">Carregando…</div>;
  const cat = cats.find(c => c.id_categoria === v.id_categoria);

  return (
    <div className="space-y-4 max-w-4xl">
      <Link to="/cliente/veiculos" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1"><ArrowLeft className="w-4 h-4" />Voltar</Link>
      <Card className="overflow-hidden">
        <div className="h-56 gradient-hero grid place-items-center"><Car className="w-24 h-24 text-primary-foreground" /></div>
        <CardContent className="p-6 space-y-5">
          <div className="flex items-start justify-between flex-wrap gap-3">
            <div>
              <h1 className="text-2xl font-bold">{v.marca} {v.modelo}</h1>
              <p className="text-muted-foreground">{cat?.nome_categoria} · {v.ano} · {v.placa}</p>
            </div>
            <StatusBadge status={v.status_veiculo} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Feat icon={BatteryCharging} label="Autonomia" value={`${v.autonomia_km} km`} />
            <Feat icon={Settings2} label="Câmbio" value={v.tipo_cambio} />
            <Feat icon={Music} label="Som" value={v.possui_som ? "Sim" : "Não"} />
            <Feat icon={Plane} label="Viagem" value={v.adequado_viagem ? "Adequado" : "Cidade"} />
          </div>

          <div>
            <div className="text-sm font-medium mb-1">Conforto</div>
            <Badge variant="outline" className="capitalize">{v.nivel_conforto}</Badge>
          </div>

          <Link to="/cliente/agendamentos/novo" search={{ veiculo: v.id_veiculo } as any}>
            <Button size="lg" className="w-full md:w-auto">Agendar este veículo</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

function Feat({ icon: Icon, label, value }: any) {
  return (
    <div className="border rounded-lg p-3">
      <Icon className="w-4 h-4 text-primary mb-1" />
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="font-medium capitalize">{value}</div>
    </div>
  );
}
