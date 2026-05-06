"use client";

import styles from "./Modal.module.css";

export default function ModalListar({ close }) {
const pecas = [
  {
    id: "P001",
    nome: "Motor Turbofan GE90",
    tipo: "Importada",
    status: "Pronta para uso",
  },
  {
    id: "P002",
    nome: "Radar Tático R-2000",
    tipo: "Nacional",
    status: "Em produção",
  },
  {
    id: "P003",
    nome: "Assento Ejetor MK-16",
    tipo: "Importada",
    status: "Em transporte",
  },
  {
    id: "P004",
    nome: "Asa Frontal Boeing 737",
    tipo: "Importada",
    status: "Em produção",
  },
  {
    id: "P005",
    nome: "Trem de Pouso Principal",
    tipo: "Nacional",
    status: "Pronta para uso",
  },
  {
    id: "P006",
    nome: "Sistema de Navegação GPS-X",
    tipo: "Importada",
    status: "Em transporte",
  },
  {
    id: "P007",
    nome: "Tanque de Combustível T-3000",
    tipo: "Nacional",
    status: "Em produção",
  },
  {
    id: "P008",
    nome: "Painel de Controle Digital",
    tipo: "Importada",
    status: "Pronta para uso",
  },
  {
    id: "P009",
    nome: "Sensor de Altitude A-500",
    tipo: "Nacional",
    status: "Em transporte",
  },
  {
    id: "P010",
    nome: "Sistema de Comunicação Criptografado",
    tipo: "Nacional",
    status: "Pronta para uso",
  },
];

  return (
     <div className={styles.overlay}>
    <div className={styles.modal}>
      <h2>Lista de Pecas</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {pecas.map((func) => (
            <tr key={func.id}>
              <td>{func.id}</td>
              <td>{func.nome}</td>
              <td>{func.tipo}</td>
              <td>{func.status}</td>
            </tr>
            ))}
          </tbody>
        </table>
        <button className={styles.cancel} onClick={close}>Fechar</button>
      </div>
    </div>
  );
}