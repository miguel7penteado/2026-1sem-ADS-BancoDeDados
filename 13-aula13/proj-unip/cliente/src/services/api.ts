/**
 * Camada centralizada de acesso à API.
 *
 * Para conectar à API Flask real, defina VITE_USE_MOCK = "false"
 * e ajuste VITE_API_BASE_URL (default: http://127.0.0.1:5000/api).
 *
 * Enquanto VITE_USE_MOCK !== "false", todos os métodos usam dados mockados
 * armazenados em memória (lib/mockData.ts).
 */
import {
  mockAgendamentos, mockCategorias, mockChats, mockClientes,
  mockInspecoes, mockLocacoes, mockMensagens, mockPagamentos, mockVeiculos,
  type Agendamento, type AtendimentoChat, type CategoriaVeiculo, type Cliente,
  type Inspecao, type Locacao, type MensagemChat, type Pagamento, type Veiculo,
} from "@/lib/mockData";

const API_BASE = (import.meta as any).env?.VITE_API_BASE_URL ?? "http://127.0.0.1:5000/api";
const USE_MOCK = ((import.meta as any).env?.VITE_USE_MOCK ?? "true") !== "false";

// estados mutáveis em memória (mock)
let clientes = [...mockClientes];
let categorias = [...mockCategorias];
let veiculos = [...mockVeiculos];
let agendamentos = [...mockAgendamentos];
let locacoes = [...mockLocacoes];
let pagamentos = [...mockPagamentos];
let inspecoes = [...mockInspecoes];
let chats = [...mockChats];
let mensagens = [...mockMensagens];

const nextId = <T extends { [k: string]: any }>(arr: T[], key: string) =>
  arr.reduce((m, x) => Math.max(m, x[key] ?? 0), 0) + 1;

async function http<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });
  if (!res.ok) throw new Error(`API ${res.status}: ${res.statusText}`);
  return res.json();
}

// ---------- CLIENTES ----------
export const clientesApi = {
  list: async (): Promise<Cliente[]> => USE_MOCK ? [...clientes] : http("/clientes/"),
  get: async (id: number): Promise<Cliente | undefined> => USE_MOCK ? clientes.find(c => c.id_cliente === id) : http(`/clientes/${id}`),
  create: async (data: Omit<Cliente, "id_cliente">): Promise<Cliente> => {
    if (!USE_MOCK) return http("/clientes/", { method: "POST", body: JSON.stringify(data) });
    const novo = { ...data, id_cliente: nextId(clientes, "id_cliente") };
    clientes.push(novo); return novo;
  },
  update: async (id: number, data: Partial<Cliente>): Promise<Cliente> => {
    if (!USE_MOCK) return http(`/clientes/${id}`, { method: "PUT", body: JSON.stringify(data) });
    clientes = clientes.map(c => c.id_cliente === id ? { ...c, ...data } : c);
    return clientes.find(c => c.id_cliente === id)!;
  },
  remove: async (id: number) => {
    if (!USE_MOCK) return http(`/clientes/${id}`, { method: "DELETE" });
    clientes = clientes.filter(c => c.id_cliente !== id);
  },
};

// ---------- CATEGORIAS ----------
export const categoriasApi = {
  list: async (): Promise<CategoriaVeiculo[]> => USE_MOCK ? [...categorias] : http("/categorias/"),
  create: async (data: Omit<CategoriaVeiculo, "id_categoria">) => {
    if (!USE_MOCK) return http("/categorias/", { method: "POST", body: JSON.stringify(data) });
    const novo = { ...data, id_categoria: nextId(categorias, "id_categoria") };
    categorias.push(novo); return novo;
  },
  update: async (id: number, data: Partial<CategoriaVeiculo>) => {
    if (!USE_MOCK) return http(`/categorias/${id}`, { method: "PUT", body: JSON.stringify(data) });
    categorias = categorias.map(c => c.id_categoria === id ? { ...c, ...data } : c);
    return categorias.find(c => c.id_categoria === id)!;
  },
  remove: async (id: number) => {
    if (!USE_MOCK) return http(`/categorias/${id}`, { method: "DELETE" });
    categorias = categorias.filter(c => c.id_categoria !== id);
  },
};

// ---------- VEÍCULOS ----------
export const veiculosApi = {
  list: async (): Promise<Veiculo[]> => USE_MOCK ? [...veiculos] : http("/veiculos/"),
  disponiveis: async (): Promise<Veiculo[]> => USE_MOCK ? veiculos.filter(v => v.status_veiculo === "disponivel") : http("/veiculos/disponiveis"),
  get: async (id: number): Promise<Veiculo | undefined> => USE_MOCK ? veiculos.find(v => v.id_veiculo === id) : http(`/veiculos/${id}`),
  create: async (data: Omit<Veiculo, "id_veiculo">) => {
    if (!USE_MOCK) return http("/veiculos/", { method: "POST", body: JSON.stringify(data) });
    const novo = { ...data, id_veiculo: nextId(veiculos, "id_veiculo") };
    veiculos.push(novo); return novo;
  },
  update: async (id: number, data: Partial<Veiculo>) => {
    if (!USE_MOCK) return http(`/veiculos/${id}`, { method: "PUT", body: JSON.stringify(data) });
    veiculos = veiculos.map(v => v.id_veiculo === id ? { ...v, ...data } : v);
    return veiculos.find(v => v.id_veiculo === id)!;
  },
  remove: async (id: number) => {
    if (!USE_MOCK) return http(`/veiculos/${id}`, { method: "DELETE" });
    veiculos = veiculos.filter(v => v.id_veiculo !== id);
  },
};

// ---------- AGENDAMENTOS ----------
export const agendamentosApi = {
  list: async (): Promise<Agendamento[]> => USE_MOCK ? [...agendamentos] : http("/agendamentos/"),
  listByCliente: async (id_cliente: number): Promise<Agendamento[]> => USE_MOCK ? agendamentos.filter(a => a.id_cliente === id_cliente) : http(`/agendamentos/?cliente=${id_cliente}`),
  create: async (data: Omit<Agendamento, "id_agendamento" | "status_agendamento">) => {
    const payload = { ...data, status_agendamento: "pendente" as const };
    if (!USE_MOCK) return http("/agendamentos/", { method: "POST", body: JSON.stringify(payload) });
    const novo = { ...payload, id_agendamento: nextId(agendamentos, "id_agendamento") };
    agendamentos.push(novo); return novo;
  },
  confirmar: async (id: number) => {
    if (!USE_MOCK) return http(`/agendamentos/${id}/confirmar`, { method: "POST" });
    agendamentos = agendamentos.map(a => a.id_agendamento === id ? { ...a, status_agendamento: "confirmado" } : a);
  },
  cancelar: async (id: number) => {
    if (!USE_MOCK) return http(`/agendamentos/${id}/cancelar`, { method: "POST" });
    agendamentos = agendamentos.map(a => a.id_agendamento === id ? { ...a, status_agendamento: "cancelado" } : a);
  },
  remove: async (id: number) => {
    if (!USE_MOCK) return http(`/agendamentos/${id}`, { method: "DELETE" });
    agendamentos = agendamentos.filter(a => a.id_agendamento !== id);
  },
};

// ---------- LOCAÇÕES ----------
export const locacoesApi = {
  list: async (): Promise<Locacao[]> => USE_MOCK ? [...locacoes] : http("/locacoes/"),
  create: async (data: Omit<Locacao, "id_locacao">) => {
    if (!USE_MOCK) return http("/locacoes/", { method: "POST", body: JSON.stringify(data) });
    const novo = { ...data, id_locacao: nextId(locacoes, "id_locacao") };
    locacoes.push(novo); return novo;
  },
  finalizar: async (id: number, data: { data_devolucao: string; tempo_locacao_horas: number; valor_total: number }) => {
    if (!USE_MOCK) return http(`/locacoes/${id}/finalizar`, { method: "POST", body: JSON.stringify(data) });
    locacoes = locacoes.map(l => l.id_locacao === id ? { ...l, ...data, status_locacao: "finalizada" } : l);
  },
};

// ---------- PAGAMENTOS ----------
export const pagamentosApi = {
  list: async (): Promise<Pagamento[]> => USE_MOCK ? [...pagamentos] : http("/pagamentos/"),
  create: async (data: Omit<Pagamento, "id_pagamento">) => {
    if (!USE_MOCK) return http("/pagamentos/", { method: "POST", body: JSON.stringify(data) });
    const novo = { ...data, id_pagamento: nextId(pagamentos, "id_pagamento") };
    pagamentos.push(novo); return novo;
  },
  confirmar: async (id: number) => {
    if (!USE_MOCK) return http(`/pagamentos/${id}/confirmar`, { method: "POST" });
    pagamentos = pagamentos.map(p => p.id_pagamento === id ? { ...p, status_pagamento: "confirmado" } : p);
  },
};

// ---------- INSPEÇÕES ----------
export const inspecoesApi = {
  list: async (): Promise<Inspecao[]> => USE_MOCK ? [...inspecoes] : http("/inspecoes/"),
  abrir: async (id_veiculo: number, observacoes: string) => {
    const data: Omit<Inspecao, "id_inspecao"> = {
      id_veiculo, data_inicio: new Date().toISOString(), data_fim: null,
      status_inspecao: "em_inspecao", observacoes,
    };
    if (!USE_MOCK) return http("/inspecoes/", { method: "POST", body: JSON.stringify(data) });
    const novo = { ...data, id_inspecao: nextId(inspecoes, "id_inspecao") };
    inspecoes.push(novo);
    veiculos = veiculos.map(v => v.id_veiculo === id_veiculo ? { ...v, status_veiculo: "em_inspecao" } : v);
    return novo;
  },
  finalizar: async (id: number) => {
    if (!USE_MOCK) return http(`/inspecoes/${id}/finalizar`, { method: "POST" });
    const insp = inspecoes.find(i => i.id_inspecao === id);
    inspecoes = inspecoes.map(i => i.id_inspecao === id ? { ...i, status_inspecao: "finalizada", data_fim: new Date().toISOString() } : i);
    if (insp) veiculos = veiculos.map(v => v.id_veiculo === insp.id_veiculo ? { ...v, status_veiculo: "disponivel" } : v);
  },
};

// ---------- CHATS / MENSAGENS ----------
export const chatsApi = {
  list: async (): Promise<AtendimentoChat[]> => USE_MOCK ? [...chats] : http("/chats/"),
  listByCliente: async (id_cliente: number): Promise<AtendimentoChat[]> => USE_MOCK ? chats.filter(c => c.id_cliente === id_cliente) : http(`/chats/?cliente=${id_cliente}`),
  create: async (id_cliente: number): Promise<AtendimentoChat> => {
    const data: Omit<AtendimentoChat, "id_chat"> = {
      id_cliente, data_abertura: new Date().toISOString(),
      status_chat: "aberto", tipo_triagem: "geral",
    };
    if (!USE_MOCK) return http("/chats/", { method: "POST", body: JSON.stringify(data) });
    const novo = { ...data, id_chat: nextId(chats, "id_chat") };
    chats.push(novo); return novo;
  },
  triagem: async (id_chat: number, conteudo: string): Promise<AtendimentoChat["tipo_triagem"]> => {
    if (!USE_MOCK) return http("/chats/triagem", { method: "POST", body: JSON.stringify({ id_chat, conteudo }) });
    const txt = conteudo.toLowerCase();
    let tipo: AtendimentoChat["tipo_triagem"] = "geral";
    if (/pag(amento|ar)|boleto|pix|cart/.test(txt)) tipo = "pagamento";
    else if (/ve[ií]culo|carro|modelo|placa/.test(txt)) tipo = "veiculo";
    else if (/agenda|reserva|hor[áa]rio/.test(txt)) tipo = "agendamento";
    else if (/inspe[çc][ãa]o|revis/.test(txt)) tipo = "inspecao";
    else if (/atendente|humano|falar com/.test(txt)) tipo = "atendimento_humano";
    chats = chats.map(c => c.id_chat === id_chat ? { ...c, tipo_triagem: tipo } : c);
    return tipo;
  },
  fechar: async (id: number) => {
    if (!USE_MOCK) return http(`/chats/${id}`, { method: "PUT", body: JSON.stringify({ status_chat: "fechado" }) });
    chats = chats.map(c => c.id_chat === id ? { ...c, status_chat: "fechado" } : c);
  },
};

export const mensagensApi = {
  listByChat: async (id_chat: number): Promise<MensagemChat[]> => USE_MOCK ? mensagens.filter(m => m.id_chat === id_chat) : http(`/mensagens/?chat=${id_chat}`),
  create: async (data: Omit<MensagemChat, "id_mensagem" | "data_envio">) => {
    const payload = { ...data, data_envio: new Date().toISOString() };
    if (!USE_MOCK) return http("/mensagens/", { method: "POST", body: JSON.stringify(payload) });
    const novo = { ...payload, id_mensagem: nextId(mensagens, "id_mensagem") };
    mensagens.push(novo); return novo;
  },
};
