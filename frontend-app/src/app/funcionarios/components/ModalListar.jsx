"use client";

import styles from "./Modal.module.css";

export default function ModalListar({ close }) {
 const funcionarios = [
  {
    id: "F001",
    nome: "Isabelo Submarino",
    telefone: "(11) 98765-4321",
    nivelPermissao: "Administrador",
  },
  {
    id: "F002",
    nome: "Maria Souza",
    telefone: "(21) 99876-5432",
    nivelPermissao: "Operador",
  },
  {
    id: "F003",
    nome: "Carlos Pereira",
    telefone: "(31) 91234-5678",
    nivelPermissao: "Engenheiro",
  },
  {
    id: "F004",
    nome: "Ana Costa",
    telefone: "(41) 92345-6789",
    nivelPermissao: "Administrador",
  },
];

  return (
     <div className={styles.overlay}>
    <div className={styles.modal}>
      <h2>Lista de Funcionários</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Nível de Permissão</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map((func) => (
            <tr key={func.id}>
              <td>{func.id}</td>
              <td>{func.nome}</td>
              <td>{func.telefone}</td>
              <td>{func.nivelPermissao}</td>
            </tr>
            ))}
          </tbody>
        </table>
        <button className={styles.cancel} onClick={close}>Fechar</button>
      </div>
    </div>
  );
}