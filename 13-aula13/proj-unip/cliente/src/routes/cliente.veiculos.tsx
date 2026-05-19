import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { veiculosApi } from "@/services/api";
import type { Veiculo } from "@/lib/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, BatteryCharging, Music, Plane, Settings2 } from "lucide-react";

export const Route = createFileRoute("/cliente/veiculos")({ component: VeiculosCliente });

function VeiculosCliente() {
  const [items, setItems] = useState<Veiculo[]>([]);
  useEffect(() => { veiculosApi.disponiveis().then(setItems); }, []);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold">Veículos disponíveis</h1>
        <p className="text-muted-foreground text-sm">Escolha o veículo elétrico ideal</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(v => (
          <Card key={v.id_veiculo} className="gradient-card overflow-hidden">
            <div className="h-32 bg-gradient-to-br from-primary/30 to-accent/30 grid place-items-center">
              <Car className="w-16 h-16 text-primary" />
            </div>
            <CardContent className="p-5 space-y-3">
              <div>
                <div className="font-semibold text-lg">{v.marca} {v.modelo}</div>
                <div className="text-xs text-muted-foreground">{v.ano} · {v.placa}</div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <Badge variant="outline" className="gap-1"><BatteryCharging className="w-3 h-3" />{v.autonomia_km} km</Badge>
                <Badge variant="outline" className="gap-1"><Settings2 className="w-3 h-3" />{v.tipo_cambio}</Badge>
                <Badge variant="outline" className="capitalize">Conforto: {v.nivel_conforto}</Badge>
                {v.possui_som && <Badge variant="outline" className="gap-1"><Music className="w-3 h-3" />Som</Badge>}
                {v.adequado_viagem && <Badge variant="outline" className="gap-1"><Plane className="w-3 h-3" />Viagem</Badge>}
              </div>
              <div className="flex gap-2">
                <Link to="/cliente/veiculos/$id" params={{ id: String(v.id_veiculo) }} className="flex-1"><Button variant="outline" className="w-full">Ver detalhes</Button></Link>
                <Link to="/cliente/agendamentos/novo" search={{ veiculo: v.id_veiculo } as any} className="flex-1"><Button className="w-full">Agendar</Button></Link>
              </div>
            </CardContent>
          </Card>
        ))}
        {items.length === 0 && <div className="text-muted-foreground col-span-full text-center py-10">Nenhum veículo disponível no momento.</div>}
      </div>
    </div>
  );
}
