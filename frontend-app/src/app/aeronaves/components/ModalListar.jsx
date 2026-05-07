"use client";

import styles from "./Modal.module.css";

export default function ModalListar({ close }) {
  const aeronaves = [
    { codigo: "A001", modelo: "Boeing 737", tipo: "Comercial", cliente: "LATAM" },
    { codigo: "A002", modelo: "F-16", tipo: "Militar", cliente: "FAB" },
    { codigo: "A003", modelo: "Boeing 737", tipo: "Comercial", cliente: "LATAM" },
    { codigo: "A004", modelo: "tucano", tipo: "militar", cliente: "Isabelo Submarino" },
  ];

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Lista de Aeronaves</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Código</th>
              <th>Modelo</th>
              <th>Tipo</th>
              <th>Cliente</th>
            </tr>
          </thead>
          <tbody>
            {aeronaves.map((a) => (
              <tr key={a.codigo}>
                <td>{a.codigo}</td>
                <td>{a.modelo}</td>
                <td>{a.tipo}</td>
                <td>{a.cliente}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className={styles.cancel} onClick={close}>Fechar</button>
      </div>
    </div>
  );
}