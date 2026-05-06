"use client";
import styles from "./Modal.module.css";

export default function ModalListar({ close }) {
  const etapas = [
    { id: 1, nome: "Montagem", status: "Em andamento" },
    { id: 2, nome: "Inspeção", status: "Pendente" },
    { id: 3, nome: "Teste de Voo", status: "Finalizada" },
  ];

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Listar Etapas</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {etapas.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.nome}</td>
                <td>{e.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.buttons}>
        <button className={styles.cancel} onClick={close}>Fechar</button>
        </div>
      </div>
    </div>
  );
}
