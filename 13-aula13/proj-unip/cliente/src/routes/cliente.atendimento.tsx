import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { chatsApi, mensagensApi } from "@/services/api";
import type { AtendimentoChat, MensagemChat } from "@/lib/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/cliente/atendimento")({ component: Atendimento });

function Atendimento() {
  const { user } = useAuth();
  const id = user?.id_cliente ?? 1;
  const [chat, setChat] = useState<AtendimentoChat | null>(null);
  const [msgs, setMsgs] = useState<MensagemChat[]>([]);
  const [text, setText] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      const chats = await chatsApi.listByCliente(id);
      let c = chats.find(c => c.status_chat === "aberto");
      if (!c) c = await chatsApi.create(id);
      setChat(c);
      setMsgs(await mensagensApi.listByChat(c.id_chat));
    })();
  }, [id]);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs]);

  const send = async () => {
    if (!chat || !text.trim()) return;
    await mensagensApi.create({ id_chat: chat.id_chat, remetente: "cliente", conteudo: text });
    setText("");
    setMsgs(await mensagensApi.listByChat(chat.id_chat));
  };

  const triar = async () => {
    if (!chat || !text.trim()) { toast.error("Digite sua dúvida primeiro"); return; }
    const tipo = await chatsApi.triagem(chat.id_chat, text);
    await mensagensApi.create({ id_chat: chat.id_chat, remetente: "cliente", conteudo: text });
    await mensagensApi.create({ id_chat: chat.id_chat, remetente: "bot", conteudo: `Sua dúvida foi classificada como: ${tipo.replace(/_/g, " ")}. Um atendente entrará em contato.` });
    setChat({ ...chat, tipo_triagem: tipo });
    setText("");
    setMsgs(await mensagensApi.listByChat(chat.id_chat));
    toast.success(`Triagem: ${tipo.replace(/_/g, " ")}`);
  };

  return (
    <div className="space-y-4 max-w-3xl">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h1 className="text-2xl font-bold">Atendimento</h1>
        {chat && <Badge variant="outline" className="capitalize">Triagem: {chat.tipo_triagem.replace(/_/g, " ")}</Badge>}
      </div>
      <Card className="flex flex-col h-[600px]">
        <CardContent className="p-0 flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {msgs.map(m => (
              <div key={m.id_mensagem} className={cn("max-w-[75%] rounded-lg px-3 py-2 text-sm", m.remetente === "cliente" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted")}>
                <div className="text-xs opacity-70 mb-0.5 capitalize">{m.remetente}</div>
                {m.conteudo}
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <div className="border-t p-3 flex flex-wrap gap-2">
            <Input value={text} onChange={e => setText(e.target.value)} placeholder="Digite sua mensagem…" onKeyDown={e => e.key === "Enter" && send()} className="flex-1 min-w-[200px]" />
            <Button variant="outline" onClick={triar}><Sparkles className="w-4 h-4 mr-1" />Triagem automática</Button>
            <Button onClick={send}><Send className="w-4 h-4 mr-1" />Enviar</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
