import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { chatsApi, clientesApi, mensagensApi } from "@/services/api";
import type { AtendimentoChat, Cliente, MensagemChat } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/StatusBadge";
import { Badge } from "@/components/ui/badge";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin/atendimentos")({ component: AtendimentosAdmin });

function AtendimentosAdmin() {
  const [chats, setChats] = useState<AtendimentoChat[]>([]);
  const [cls, setCls] = useState<Cliente[]>([]);
  const [sel, setSel] = useState<number | null>(null);
  const [msgs, setMsgs] = useState<MensagemChat[]>([]);
  const [text, setText] = useState("");

  const refresh = () => Promise.all([chatsApi.list(), clientesApi.list()]).then(([c, cl]) => { setChats(c); setCls(cl); });
  useEffect(() => { refresh(); }, []);
  useEffect(() => { if (sel) mensagensApi.listByChat(sel).then(setMsgs); }, [sel]);

  const cli = (id: number) => cls.find(c => c.id_cliente === id)?.nome ?? "—";

  const send = async () => {
    if (!sel || !text.trim()) return;
    await mensagensApi.create({ id_chat: sel, remetente: "atendente", conteudo: text });
    setText(""); mensagensApi.listByChat(sel).then(setMsgs);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Atendimentos</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="md:col-span-1"><CardContent className="p-3 space-y-2">
          <div className="text-sm font-medium text-muted-foreground px-2">Chats</div>
          {chats.map(c => (
            <button key={c.id_chat} onClick={() => setSel(c.id_chat)} className={cn("w-full text-left p-3 rounded-md border hover:bg-muted/50", sel === c.id_chat && "bg-primary/10 border-primary")}>
              <div className="flex items-center justify-between"><div className="font-medium">{cli(c.id_cliente)}</div><StatusBadge status={c.status_chat} /></div>
              <div className="text-xs text-muted-foreground mt-1">Triagem: <Badge variant="outline" className="capitalize">{c.tipo_triagem.replace(/_/g, " ")}</Badge></div>
            </button>
          ))}
          {chats.length === 0 && <div className="text-sm text-muted-foreground p-3">Nenhum chat</div>}
        </CardContent></Card>

        <Card className="md:col-span-2 flex flex-col h-[600px]">
          <CardContent className="p-0 flex-1 flex flex-col">
            {sel ? (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                  {msgs.map(m => (
                    <div key={m.id_mensagem} className={cn("max-w-[75%] rounded-lg px-3 py-2 text-sm", m.remetente === "atendente" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted")}>
                      <div className="text-xs opacity-70 mb-0.5 capitalize">{m.remetente}</div>
                      {m.conteudo}
                    </div>
                  ))}
                </div>
                <div className="border-t p-3 flex gap-2">
                  <Input value={text} onChange={e => setText(e.target.value)} placeholder="Responder ao cliente…" onKeyDown={e => e.key === "Enter" && send()} />
                  <Button onClick={send}><Send className="w-4 h-4" /></Button>
                </div>
              </>
            ) : <div className="grid place-items-center h-full text-muted-foreground">Selecione um chat</div>}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
