"use client";

import { useState } from "react";
import styles from "./Aeronaves.module.css";
import ModalCadastrar from "./components/ModalCadastrar";
import ModalListar from "./components/ModalListar";
import ModalEditar from "./components/ModalEditar";
import ModalDeletar from "./components/ModalDeletar";
import { useAuth } from "../../context/AuthContext";

export default function Aeronaves() {
  const { temPermissao } = useAuth();
  const [showCadastrar, setShowCadastrar] = useState(false);
  const [showListar, setShowListar] = useState(false);
  const [showEditar, setShowEditar] = useState(false);
  const [showDeletar, setShowDeletar] = useState(false);


  const podeCadastrar =
    temPermissao("criar") || temPermissao("criar_aeronave");
  const podeListar = temPermissao("ver_aeronaves") || temPermissao("listar");
  const podeEditar = temPermissao("editar");
  const podeDeletar = temPermissao("deletar");

 
  const aeronaves = [
    {
      codigo: "A001",
      modelo: "Boeing 737",
      tipo: "Comercial",
      capacidade: 180,
      alcance: "5600 km",
      cliente: "LATAM",
      dataEntrega: "2026-06-12",
    },
    {
      codigo: "A002",
      modelo: "F-16",
      tipo: "Militar",
      capacidade: 1,
      alcance: "4220 km",
      cliente: "FAB",
      dataEntrega: "2026-12-01",
    },
    {
      codigo: "A003",
      modelo: "Boeing 737",
      tipo: "Comercial",
      capacidade: 1,
      alcance: "10000 km",
      cliente: "LATAM",
      dataEntrega: "2009-02-01",
    },
    {
      codigo: "A004",
      modelo: "Tucano",
      tipo: "Militar",
      capacidade: 1,
      alcance: "3600 km",
      cliente: "FAB",
      dataEntrega: "2009-02-01",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Menu Aeronaves</h1>

      <div className={styles.topBar}>
        {podeCadastrar && (
          <button className={styles.btn} onClick={() => setShowCadastrar(true)}>
            Cadastrar
          </button>
        )}
        {podeListar && (
          <button className={styles.btn} onClick={() => setShowListar(true)}>
            Listar
          </button>
        )}
        {podeEditar && (
          <button className={styles.btn} onClick={() => setShowEditar(true)}>
            Editar
          </button>
        )}
        {podeDeletar && (
          <button className={styles.btn} onClick={() => setShowDeletar(true)}>
            Deletar
          </button>
        )}
      </div>

      <div className={styles.tableContainer}>
        <h2 className={styles.title}>Aeronaves em Exibição</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Código</th>
              <th>Modelo</th>
              <th>Tipo</th>
              <th>Capacidade</th>
              <th>Alcance</th>
              <th>Cliente</th>
              <th>Data Entrega</th>
            </tr>
          </thead>
          <tbody>
            {aeronaves.map((a) => (
              <tr key={a.codigo}>
                <td>{a.codigo}</td>
                <td>{a.modelo}</td>
                <td>{a.tipo}</td>
                <td>{a.capacidade}</td>
                <td>{a.alcance}</td>
                <td>{a.cliente}</td>
                <td>{a.dataEntrega}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showCadastrar && <ModalCadastrar close={() => setShowCadastrar(false)} />}
      {showListar && <ModalListar close={() => setShowListar(false)} />}
      {showEditar && <ModalEditar close={() => setShowEditar(false)} />}
      {showDeletar && <ModalDeletar close={() => setShowDeletar(false)} />}
    </div>
  );
}
