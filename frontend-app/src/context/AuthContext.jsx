"use client";

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const permissoesPorCargo = {
  administrador: [
    "ver_aeronaves",
    "ver_funcionarios",
    "ver_pecas",
    "ver_etapas",
    "ver_testes",
    "ver_relatorios",
    "criar",
    "editar",
    "deletar",
    "associar_funcionario",
  ],
  engenheiro: [
    "ver_aeronaves",
    "ver_funcionarios",
    "criar_peca",
    "ver_pecas",
    "ver_etapas",
    "ver_relatorios",
    "ver_testes",
    "criar_etapa",
    "finalizar_etapa",
    "gerar_relatorio",
    "listar_etapa",
    "iniciar_etapa",
  ],
  operador: [
    "ver_aeronaves",
    "ver_funcionarios",
    "associar_funcionario",
    "criar_etapa",
    "ver_pecas",
    "ver_etapas",
    "listar_etapa",
    "iniciar_etapa",
    "finalizar_etapa",
    "criar_peca",
    "listar",
  
  ],
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (nome, cargo) => {
    setUser({ nome, cargo: cargo.toLowerCase() });
  };

  const logout = () => {
    setUser(null);
  };

  /**
   * Verifica se o usuário tem permissão.
   * Se estiver na página "etapas" e for operador,
   * libera tudo (criar, editar, deletar, associar_funcionario etc)
   */
  const temPermissao = (permissao, modulo = null) => {
    const cargo = user?.cargo?.toLowerCase();
    if (!cargo) return false;

    
    if (cargo === "operador" && modulo === "etapas") {
      return [
        "criar",
        "editar",
        "deletar",
        "associar_funcionario",
        "iniciar",
        "finalizar",
        "listar",
        "ver",
      ].includes(permissao);
    }


    return permissoesPorCargo[cargo]?.includes(permissao);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, temPermissao }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
