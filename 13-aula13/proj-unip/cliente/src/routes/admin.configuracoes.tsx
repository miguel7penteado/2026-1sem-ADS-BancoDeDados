import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/admin/configuracoes")({ component: () => (
  <div className="space-y-4">
    <h1 className="text-2xl font-bold">Configurações</h1>
    <Card>
      <CardHeader><CardTitle>Integração API</CardTitle></CardHeader>
      <CardContent className="space-y-2 text-sm text-muted-foreground">
        <p>Base URL atual: <code className="bg-muted px-2 py-1 rounded">http://127.0.0.1:5000/api</code></p>
        <p>Para usar a API real, defina as variáveis de ambiente:</p>
        <pre className="bg-muted rounded p-3 text-xs">VITE_USE_MOCK=false{"\n"}VITE_API_BASE_URL=http://127.0.0.1:5000/api</pre>
        <p>Endpoints integrados em <code>src/services/api.ts</code>.</p>
      </CardContent>
    </Card>
  </div>
)});
