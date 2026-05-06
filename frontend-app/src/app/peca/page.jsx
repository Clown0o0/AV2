"use client";

import { useState } from "react";
import styles from "./Peca.module.css";
import ModalCadastrar from "./components/ModalCadastrar";
import ModalListar from "./components/ModalListar";
import ModalEditar from "./components/ModalEditar";
import ModalDeletar from "./components/ModalDeletar";
import { useAuth } from "../../context/AuthContext";

export default function Pecas() {
  const { temPermissao } = useAuth();
  const [showCadastrar, setShowCadastrar] = useState(false);
  const [showListar, setShowListar] = useState(false);
  const [showEditar, setShowEditar] = useState(false);
  const [showDeletar, setShowDeletar] = useState(false);


  const podeCadastrar =
    temPermissao("criar") || temPermissao("criar_peca");
  const podeListar = temPermissao("listar") || temPermissao("ver_pecas");
  const podeEditar = temPermissao("editar");
  const podeDeletar = temPermissao("deletar");


  const pecas = [
    {
      id: "P001",
      nome: "Motor Turbofan GE90",
      tipo: "Importada",
      fornecedor: "General Electric",
      status: "Pronta para uso",
    },
    {
      id: "P002",
      nome: "Radar Tático R-2000",
      tipo: "Nacional",
      fornecedor: "Lockheed Martin",
      status: "Em produção",
    },
    {
      id: "P003",
      nome: "Assento Ejetor MK-16",
      tipo: "Importada",
      fornecedor: "Martin-Baker",
      status: "Em transporte",
    },
    {
      id: "P004",
      nome: "Asa Frontal Boeing 737",
      tipo: "Importada",
      fornecedor: "Boeing Parts",
      status: "Em produção",
    },
    {
      id: "P005",
      nome: "Trem de Pouso Principal",
      tipo: "Nacional",
      fornecedor: "Safran Landing Systems",
      status: "Pronta para uso",
    },
    {
      id: "P006",
      nome: "Sistema de Navegação GPS-X",
      tipo: "Importada",
      fornecedor: "Garmin Aviation",
      status: "Em transporte",
    },
    {
      id: "P007",
      nome: "Tanque de Combustível T-3000",
      tipo: "Nacional",
      fornecedor: "Northrop Grumman",
      status: "Em produção",
    },
    {
      id: "P008",
      nome: "Painel de Controle Digital",
      tipo: "Importada",
      fornecedor: "Honeywell Aerospace",
      status: "Pronta para uso",
    },
    {
      id: "P009",
      nome: "Sensor de Altitude A-500",
      tipo: "Nacional",
      fornecedor: "Collins Aerospace",
      status: "Em transporte",
    },
    {
      id: "P010",
      nome: "Sistema de Comunicação Criptografado",
      tipo: "Nacional",
      fornecedor: "Raytheon Technologies",
      status: "Pronta para uso",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Menu Peças</h1>

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
        <h2 className={styles.title}>Peças</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Fornecedor</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {pecas.map((f) => (
              <tr key={f.id}>
                <td>{f.id}</td>
                <td>{f.nome}</td>
                <td>{f.tipo}</td>
                <td>{f.fornecedor}</td>
                <td>{f.status}</td>
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
