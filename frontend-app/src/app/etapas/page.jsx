"use client";

import { useState } from "react";
import styles from "./Etapa.module.css";
import ModalAdicionar from "./components/ModalAdicionar";
import ModalIniciar from "./components/ModalIniciar";
import ModalFinalizar from "./components/ModalFinalizar";
import ModalListar from "./components/ModalListar";
import ModalAssociar from "./components/ModalAssociar";
import ModalVerFuncionarios from "./components/ModalVerFuncionarios";
import { useAuth } from "../../context/AuthContext";

export default function Etapas() {
  const [showAdicionar, setShowAdicionar] = useState(false);
  const [showIniciar, setShowIniciar] = useState(false);
  const [showFinalizar, setShowFinalizar] = useState(false);
  const [showListar, setShowListar] = useState(false);
  const [showAssociar, setShowAssociar] = useState(false);
  const [showVerFuncionarios, setShowVerFuncionarios] = useState(false);

  const { user, temPermissao } = useAuth();

  const etapas = [
    { id: 1, nome: "Montagem Estrutural", funcionario: "João Silva", status: "Em andamento", prazo: "2025-11-10", ordem: 1 },
    { id: 2, nome: "Instalação de Sistemas", funcionario: "Ana Costa", status: "Pendente", prazo: "2025-11-15", ordem: 2 },
    { id: 3, nome: "Inspeção de Qualidade", funcionario: "Maria Souza", status: "Pendente", prazo: "2025-11-20", ordem: 3 },
    { id: 4, nome: "Teste de Voo", funcionario: "Carlos Pereira", status: "Finalizada", prazo: "2025-10-30", ordem: 4 },
    { id: 5, nome: "Ajustes Finais", funcionario: "Pedro Almeida", status: "Em andamento", prazo: "2025-11-05", ordem: 5 },
    { id: 6, nome: "Liberação para Entrega", funcionario: "Fernanda Lima", status: "Pendente", prazo: "2025-11-25", ordem: 6 },
  ];

  const podeAdicionar = temPermissao("criar_etapa") || temPermissao("criar");
  const podeIniciar = temPermissao("iniciar_etapa") || temPermissao("editar");
  const podeFinalizar = temPermissao("finalizar_etapa") || temPermissao("editar");
  const podeListar = temPermissao("ver_etapas");
  
  const podeAssociar = temPermissao("associar_funcionario") || temPermissao("editar");
  const podeVerFuncionarios = temPermissao("ver_funcionarios") || temPermissao("ver");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Etapas de Produção</h1>

      <div className={styles.topBar}>
        {podeAdicionar && (
          <button className={styles.btn} onClick={() => setShowAdicionar(true)}>
            Adicionar Etapa
          </button>
        )}
        {podeIniciar && (
          <button className={styles.btn} onClick={() => setShowIniciar(true)}>
            Iniciar Etapa
          </button>
        )}
        {podeFinalizar && (
          <button className={styles.btn} onClick={() => setShowFinalizar(true)}>
            Finalizar Etapa
          </button>
        )}
        {podeListar && (
          <button className={styles.btn} onClick={() => setShowListar(true)}>
            Listar Etapas
          </button>
        )}
        {podeAssociar && (
          <button className={styles.btn} onClick={() => setShowAssociar(true)}>
            Associar Funcionário
          </button>
        )}
        {podeVerFuncionarios && (
          <button className={styles.btn} onClick={() => setShowVerFuncionarios(true)}>
            Ver Funcionários
          </button>
        )}
      </div>

      <div className={styles.tableContainer}>
        <h2 className={styles.subtitle}>Tabela Etapas</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Etapa</th>
              <th>Funcionário</th>
              <th>Status Etapa</th>
              <th>Prazo Etapa</th>
              <th>Ordem Etapa</th>
            </tr>
          </thead>
          <tbody>
            {etapas.map((e) => (
              <tr key={e.id}>
                <td>{e.nome}</td>
                <td>{e.funcionario}</td>
                <td>{e.status}</td>
                <td>{e.prazo}</td>
                <td>{e.ordem}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAdicionar && <ModalAdicionar close={() => setShowAdicionar(false)} />}
      {showIniciar && <ModalIniciar close={() => setShowIniciar(false)} />}
      {showFinalizar && <ModalFinalizar close={() => setShowFinalizar(false)} />}
      {showListar && <ModalListar close={() => setShowListar(false)} />}
      {showAssociar && <ModalAssociar close={() => setShowAssociar(false)} />}
      {showVerFuncionarios && <ModalVerFuncionarios close={() => setShowVerFuncionarios(false)} />}
    </div>
  );
}
