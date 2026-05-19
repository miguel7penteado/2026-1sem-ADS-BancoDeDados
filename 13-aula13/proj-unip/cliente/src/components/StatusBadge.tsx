import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const styles: Record<string, string> = {
  // genéricos
  pendente: "bg-warning text-warning-foreground hover:bg-warning",
  confirmado: "bg-success text-success-foreground hover:bg-success",
  cancelado: "bg-destructive text-destructive-foreground hover:bg-destructive",
  // veículo
  disponivel: "bg-success text-success-foreground hover:bg-success",
  em_inspecao: "bg-warning text-warning-foreground hover:bg-warning",
  locado: "bg-accent text-accent-foreground hover:bg-accent",
  indisponivel: "bg-muted text-muted-foreground hover:bg-muted",
  // locação
  em_andamento: "bg-accent text-accent-foreground hover:bg-accent",
  finalizada: "bg-success text-success-foreground hover:bg-success",
  // chat
  aberto: "bg-accent text-accent-foreground hover:bg-accent",
  fechado: "bg-muted text-muted-foreground hover:bg-muted",
};

export function StatusBadge({ status }: { status: string }) {
  const label = status.replace(/_/g, " ");
  return <Badge className={cn("capitalize", styles[status] ?? "")}>{label}</Badge>;
}
