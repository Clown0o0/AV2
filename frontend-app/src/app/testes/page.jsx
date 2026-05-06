"use client";

import { useState } from "react";
import styles from "./Testes.module.css";
import ModalCadastrar from "./components/ModalCadastrar";
import ModalDeletar from "./components/ModalDeletar";

export default function Testes() {
  const [showCadastrar, setShowCadastrar] = useState(false);
  const [showDeletar, setShowDeletar] = useState(false);

  // Dados mockados
  const testes = [
    { id: "T001", tipo: "Estrutural", status: "Aprovado" },
    { id: "T002", tipo: "Motor", status: "Reprovado" },
    { id: "T003", tipo: "Aerodinâmico", status: "Aprovado" },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>TESTES</h2>

      <div className={styles.topBar}>
        <button className={styles.btn} onClick={() => setShowCadastrar(true)}>
          Cadastrar
        </button>
        <button className={styles.btn} onClick={() => setShowDeletar(true)}>
          Deletar Teste
        </button>
      </div>

      <div className={styles.tableContainer}>
        <h3 className={styles.subtitle}>ÁREA DE TESTES</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tipo</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {testes.map((t) => (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.tipo}</td>
                <td>{t.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showCadastrar && <ModalCadastrar close={() => setShowCadastrar(false)} />}
      {showDeletar && <ModalDeletar close={() => setShowDeletar(false)} />}
    </div>
  );
}