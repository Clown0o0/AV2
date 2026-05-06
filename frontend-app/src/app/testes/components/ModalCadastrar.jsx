"use client";
import styles from "./Modal.module.css";
import { useState } from "react";
export default function ModalCadastrar({ close }) {
      const [form, setForm] = useState({
        id: "",
        nome: "",
        tipo: "",
        fornecedor: "",
        status: "",
    
      });
       const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Teste Cadastrado:", form);
    close();
  };
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Cadastrar Teste</h2>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="ID do Teste" />
          <input type="text" placeholder="Tipo do Teste" />
          <select>
            <option value="">Selecione o Resultado</option>
            <option value="Aprovado">Aprovado</option>
            <option value="Reprovado">Reprovado</option>
          </select>
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.btnCancelar} onClick={close}>
            Cancelar
          </button>
          <button className={styles.btnSalvar}>Salvar</button>
        </div>
      </div>
    </div>
  );
}
