import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Perfil = "admin" | "cliente";
export interface SessionUser {
  perfil: Perfil;
  nome: string;
  email: string;
  id_cliente?: number;
}

interface AuthCtx {
  user: SessionUser | null;
  login: (email: string, perfil: Perfil) => SessionUser;
  logout: () => void;
}

const Ctx = createContext<AuthCtx | null>(null);
const KEY = "ev_session";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<SessionUser | null>(null);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
      if (raw) setUser(JSON.parse(raw));
    } catch {}
  }, []);

  const login = (email: string, perfil: Perfil): SessionUser => {
    const nome = perfil === "admin" ? "Administrador" : "Ana Souza";
    const u: SessionUser = {
      perfil, email, nome,
      id_cliente: perfil === "cliente" ? 1 : undefined,
    };
    localStorage.setItem(KEY, JSON.stringify(u));
    setUser(u);
    return u;
  };
  const logout = () => { localStorage.removeItem(KEY); setUser(null); };

  return <Ctx.Provider value={{ user, login, logout }}>{children}</Ctx.Provider>;
}

export const useAuth = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error("useAuth fora do AuthProvider");
  return v;
};
