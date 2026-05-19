import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useAuth, type Perfil } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Zap } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Entrar — VoltDrive" }] }),
  component: LoginPage,
});

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [perfil, setPerfil] = useState<Perfil>("cliente");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !senha) return;
    const u = login(email, perfil);
    navigate({ to: u.perfil === "admin" ? "/admin" : "/cliente" });
  };

  return (
    <div className="min-h-screen grid place-items-center bg-muted/30 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Link to="/" className="mx-auto w-12 h-12 rounded-xl gradient-hero grid place-items-center text-primary-foreground mb-3">
            <Zap className="w-6 h-6" />
          </Link>
          <CardTitle className="text-2xl">Acessar a VoltDrive</CardTitle>
          <p className="text-sm text-muted-foreground">Login simulado — escolha o perfil</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="voce@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="senha">Senha</Label>
              <Input id="senha" type="password" required value={senha} onChange={e => setSenha(e.target.value)} placeholder="••••••" />
            </div>
            <div className="space-y-2">
              <Label>Perfil</Label>
              <RadioGroup value={perfil} onValueChange={(v) => setPerfil(v as Perfil)} className="grid grid-cols-2 gap-2">
                <Label htmlFor="r-cliente" className="flex items-center gap-2 border rounded-md p-3 cursor-pointer has-[:checked]:bg-primary/10 has-[:checked]:border-primary">
                  <RadioGroupItem id="r-cliente" value="cliente" /> Cliente
                </Label>
                <Label htmlFor="r-admin" className="flex items-center gap-2 border rounded-md p-3 cursor-pointer has-[:checked]:bg-primary/10 has-[:checked]:border-primary">
                  <RadioGroupItem id="r-admin" value="admin" /> Administrador
                </Label>
              </RadioGroup>
            </div>
            <Button type="submit" className="w-full">Entrar</Button>
            <Link to="/" className="block text-center text-sm text-muted-foreground hover:text-foreground">← Voltar para o site</Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
