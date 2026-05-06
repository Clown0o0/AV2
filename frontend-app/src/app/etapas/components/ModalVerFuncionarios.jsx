"use client";
import styles from "./Modal.module.css";

export default function ModalVerFuncionarios({ close }) {
  const funcionarios = [
    { id: 1, nome: "João", etapa: "Montagem" },
    { id: 2, nome: "Maria", etapa: "Inspeção" },
    { id: 3, nome: "Carlos", etapa: "Teste de Voo" },
  ];

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Funcionários e Etapas</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Etapa</th>
            </tr>
          </thead>
          <tbody>
            {funcionarios.map((f) => (
              <tr key={f.id}>
                <td>{f.id}</td>
                <td>{f.nome}</td>
                <td>{f.etapa}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className={styles.cancel} onClick={close}>Fechar</button>
      </div>
    </div>
  );
}