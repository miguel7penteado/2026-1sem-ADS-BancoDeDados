import { Link, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard, Users, Tag, Car, CalendarDays, FileText, CreditCard,
  Wrench, MessagesSquare, Settings, LogOut, Home, Search, User, ClipboardList, Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem { to: string; label: string; icon: React.ComponentType<{ className?: string }>; }

const adminNav: NavItem[] = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/clientes", label: "Clientes", icon: Users },
  { to: "/admin/categorias", label: "Categorias", icon: Tag },
  { to: "/admin/veiculos", label: "Veículos", icon: Car },
  { to: "/admin/agendamentos", label: "Agendamentos", icon: CalendarDays },
  { to: "/admin/locacoes", label: "Locações", icon: FileText },
  { to: "/admin/pagamentos", label: "Pagamentos", icon: CreditCard },
  { to: "/admin/inspecoes", label: "Inspeções", icon: Wrench },
  { to: "/admin/atendimentos", label: "Atendimentos", icon: MessagesSquare },
  { to: "/admin/configuracoes", label: "Configurações", icon: Settings },
];

const clienteNav: NavItem[] = [
  { to: "/cliente", label: "Início", icon: Home },
  { to: "/cliente/veiculos", label: "Veículos Disponíveis", icon: Search },
  { to: "/cliente/agendamentos", label: "Meus Agendamentos", icon: CalendarDays },
  { to: "/cliente/locacoes", label: "Minhas Locações", icon: ClipboardList },
  { to: "/cliente/pagamentos", label: "Meus Pagamentos", icon: CreditCard },
  { to: "/cliente/atendimento", label: "Atendimento", icon: MessagesSquare },
  { to: "/cliente/perfil", label: "Meu Perfil", icon: User },
];

export function DashboardShell({ perfil, children }: { perfil: "admin" | "cliente"; children?: ReactNode }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: s => s.location.pathname });

  useEffect(() => {
    if (!user) { navigate({ to: "/login" }); return; }
    if (user.perfil !== perfil) { navigate({ to: user.perfil === "admin" ? "/admin" : "/cliente" }); }
  }, [user, perfil, navigate]);

  if (!user || user.perfil !== perfil) return null;

  const nav = perfil === "admin" ? adminNav : clienteNav;

  return (
    <div className="min-h-screen flex w-full bg-muted/30">
      <aside className="w-64 bg-sidebar text-sidebar-foreground flex flex-col sticky top-0 h-screen">
        <Link to="/" className="flex items-center gap-2 px-5 py-5 border-b border-sidebar-border">
          <div className="w-9 h-9 rounded-lg bg-sidebar-primary text-sidebar-primary-foreground grid place-items-center">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="font-semibold leading-tight">VoltDrive</div>
            <div className="text-xs opacity-70">{perfil === "admin" ? "Admin" : "Cliente"}</div>
          </div>
        </Link>
        <nav className="flex-1 px-2 py-3 space-y-1 overflow-y-auto">
          {nav.map(item => {
            const active = pathname === item.to || (item.to !== `/${perfil}` && pathname.startsWith(item.to));
            const Icon = item.icon;
            return (
              <Link key={item.to} to={item.to} className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                active ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium" : "hover:bg-sidebar-accent",
              )}>
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-3 border-t border-sidebar-border text-xs opacity-70">
          © 2026 VoltDrive
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 bg-card border-b flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="text-sm text-muted-foreground">
            Bem-vindo, <span className="font-medium text-foreground">{user.nome}</span>
          </div>
          <Button variant="ghost" size="sm" onClick={() => { logout(); navigate({ to: "/" }); }}>
            <LogOut className="w-4 h-4 mr-2" /> Sair
          </Button>
        </header>
        <main className="flex-1 p-6">
          {children ?? <Outlet />}
        </main>
      </div>
    </div>
  );
}
