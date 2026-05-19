// Dados simulados — substituir pela API real em services/api.ts

export type StatusVeiculo = "disponivel" | "em_inspecao" | "locado" | "indisponivel";
export type StatusAgendamento = "pendente" | "confirmado" | "cancelado";
export type StatusLocacao = "em_andamento" | "finalizada";
export type StatusPagamento = "pendente" | "confirmado" | "cancelado";
export type StatusInspecao = "em_inspecao" | "finalizada";
export type StatusChat = "aberto" | "fechado";

export interface Cliente {
  id_cliente: number;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  necessidades_acessibilidade: string;
}
export interface CategoriaVeiculo {
  id_categoria: number;
  nome_categoria: string;
  descricao: string;
}
export interface Veiculo {
  id_veiculo: number;
  id_categoria: number;
  marca: string;
  modelo: string;
  placa: string;
  ano: number;
  autonomia_km: number;
  tipo_cambio: "automatico" | "manual";
  possui_som: boolean;
  nivel_conforto: "basico" | "intermediario" | "alto";
  adequado_viagem: boolean;
  status_veiculo: StatusVeiculo;
}
export interface Agendamento {
  id_agendamento: number;
  id_cliente: number;
  id_veiculo: number;
  data_inicio: string;
  data_fim: string;
  periodo: "manha" | "tarde" | "noite" | "integral";
  status_agendamento: StatusAgendamento;
}
export interface Locacao {
  id_locacao: number;
  id_agendamento: number;
  data_retirada: string;
  data_devolucao: string | null;
  tempo_locacao_horas: number;
  valor_total: number;
  status_locacao: StatusLocacao;
}
export interface Pagamento {
  id_pagamento: number;
  id_locacao: number;
  valor_pago: number;
  forma_pagamento: "pix" | "cartao" | "boleto";
  data_pagamento: string;
  status_pagamento: StatusPagamento;
}
export interface Inspecao {
  id_inspecao: number;
  id_veiculo: number;
  data_inicio: string;
  data_fim: string | null;
  status_inspecao: StatusInspecao;
  observacoes: string;
}
export interface MensagemChat {
  id_mensagem: number;
  id_chat: number;
  remetente: "cliente" | "atendente" | "bot";
  conteudo: string;
  data_envio: string;
}
export interface AtendimentoChat {
  id_chat: number;
  id_cliente: number;
  data_abertura: string;
  status_chat: StatusChat;
  tipo_triagem: "pagamento" | "veiculo" | "agendamento" | "inspecao" | "atendimento_humano" | "geral";
}

export const mockClientes: Cliente[] = [
  { id_cliente: 1, nome: "Ana Souza", email: "ana@email.com", telefone: "11999990001", cpf: "111.111.111-11", necessidades_acessibilidade: "Nenhuma" },
  { id_cliente: 2, nome: "Bruno Lima", email: "bruno@email.com", telefone: "11999990002", cpf: "222.222.222-22", necessidades_acessibilidade: "Cadeira de rodas" },
  { id_cliente: 3, nome: "Carla Dias", email: "carla@email.com", telefone: "11999990003", cpf: "333.333.333-33", necessidades_acessibilidade: "Nenhuma" },
];

export const mockCategorias: CategoriaVeiculo[] = [
  { id_categoria: 1, nome_categoria: "Compacto", descricao: "Ideal para cidade" },
  { id_categoria: 2, nome_categoria: "SUV", descricao: "Espaçoso e confortável" },
  { id_categoria: 3, nome_categoria: "Sedan", descricao: "Conforto para viagens" },
];

export const mockVeiculos: Veiculo[] = [
  { id_veiculo: 1, id_categoria: 1, marca: "Renault", modelo: "Zoe", placa: "ELE-1A01", ano: 2023, autonomia_km: 300, tipo_cambio: "automatico", possui_som: true, nivel_conforto: "intermediario", adequado_viagem: false, status_veiculo: "disponivel" },
  { id_veiculo: 2, id_categoria: 2, marca: "BYD", modelo: "Yuan Plus", placa: "ELE-2B02", ano: 2024, autonomia_km: 420, tipo_cambio: "automatico", possui_som: true, nivel_conforto: "alto", adequado_viagem: true, status_veiculo: "disponivel" },
  { id_veiculo: 3, id_categoria: 3, marca: "Tesla", modelo: "Model 3", placa: "ELE-3C03", ano: 2024, autonomia_km: 500, tipo_cambio: "automatico", possui_som: true, nivel_conforto: "alto", adequado_viagem: true, status_veiculo: "em_inspecao" },
  { id_veiculo: 4, id_categoria: 1, marca: "Fiat", modelo: "500e", placa: "ELE-4D04", ano: 2023, autonomia_km: 250, tipo_cambio: "automatico", possui_som: true, nivel_conforto: "basico", adequado_viagem: false, status_veiculo: "disponivel" },
  { id_veiculo: 5, id_categoria: 2, marca: "Volvo", modelo: "XC40 Recharge", placa: "ELE-5E05", ano: 2024, autonomia_km: 400, tipo_cambio: "automatico", possui_som: true, nivel_conforto: "alto", adequado_viagem: true, status_veiculo: "locado" },
];

export const mockAgendamentos: Agendamento[] = [
  { id_agendamento: 1, id_cliente: 1, id_veiculo: 1, data_inicio: "2026-05-20", data_fim: "2026-05-22", periodo: "integral", status_agendamento: "confirmado" },
  { id_agendamento: 2, id_cliente: 2, id_veiculo: 2, data_inicio: "2026-05-25", data_fim: "2026-05-26", periodo: "manha", status_agendamento: "pendente" },
  { id_agendamento: 3, id_cliente: 1, id_veiculo: 5, data_inicio: "2026-05-15", data_fim: "2026-05-18", periodo: "integral", status_agendamento: "confirmado" },
];

export const mockLocacoes: Locacao[] = [
  { id_locacao: 1, id_agendamento: 3, data_retirada: "2026-05-15T09:00:00", data_devolucao: null, tempo_locacao_horas: 72, valor_total: 850, status_locacao: "em_andamento" },
];

export const mockPagamentos: Pagamento[] = [
  { id_pagamento: 1, id_locacao: 1, valor_pago: 850, forma_pagamento: "pix", data_pagamento: "2026-05-15", status_pagamento: "pendente" },
];

export const mockInspecoes: Inspecao[] = [
  { id_inspecao: 1, id_veiculo: 3, data_inicio: "2026-05-10", data_fim: null, status_inspecao: "em_inspecao", observacoes: "Revisão de bateria" },
];

export const mockChats: AtendimentoChat[] = [
  { id_chat: 1, id_cliente: 1, data_abertura: "2026-05-18T10:00:00", status_chat: "aberto", tipo_triagem: "agendamento" },
];

export const mockMensagens: MensagemChat[] = [
  { id_mensagem: 1, id_chat: 1, remetente: "cliente", conteudo: "Olá, preciso ajuda com meu agendamento.", data_envio: "2026-05-18T10:00:00" },
  { id_mensagem: 2, id_chat: 1, remetente: "bot", conteudo: "Olá! Vou direcionar você para um atendente.", data_envio: "2026-05-18T10:00:30" },
];
