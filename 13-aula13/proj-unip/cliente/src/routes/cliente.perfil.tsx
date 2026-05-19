import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { clientesApi } from "@/services/api";
import type { Cliente } from "@/lib/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/cliente/perfil")({ component: Perfil });

function Perfil() {
  const { user } = useAuth();
  const id = user?.id_cliente ?? 1;
  const [c, setC] = useState<Cliente | null>(null);
  useEffect(() => { clientesApi.get(id).then(x => setC(x ?? null)); }, [id]);
  if (!c) return <div className="text-muted-foreground">Carregando…</div>;

  return (
    <div className="max-w-xl space-y-4">
      <h1 className="text-2xl font-bold">Meu perfil</h1>
      <Card><CardContent className="p-6 space-y-3">
        {(["nome", "email", "telefone", "cpf", "necessidades_acessibilidade"] as const).map(f => (
          <div key={f} className="space-y-1">
            <Label className="capitalize">{f.replace(/_/g, " ")}</Label>
            <Input value={(c as any)[f] ?? ""} onChange={e => setC({ ...c, [f]: e.target.value })} />
          </div>
        ))}
        <Button className="w-full" onClick={async () => { await clientesApi.update(id, c); toast.success("Perfil atualizado"); }}>Salvar alterações</Button>
      </CardContent></Card>
    </div>
  );
}
