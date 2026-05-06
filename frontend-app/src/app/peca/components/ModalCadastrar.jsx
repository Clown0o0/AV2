"use client";

import { useState } from "react";
import styles from "./Modal.module.css";

export default function ModalCadastrar({ close }) {
  const [form, setForm] = useState({
    id: "",
    nome: "",
    tipo: "",
    fornecedor: "",
    status: "",

  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Peca Cadastrada:", form);
    close();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Cadastrar Peça</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input name="id" placeholder="ID" onChange={handleChange} required />
          <input name="nome" placeholder="nome" onChange={handleChange} required />
          <select name="tipo" onChange={handleChange} value={form.tipo}>
            <option value="Nacional">Nacional</option>
            <option value="Importada">Importada</option>           
            
          </select>
          <input name="fornecedor" placeholder="Fornecedor" onChange={handleChange} required />
    
          <select name="status" onChange={handleChange} value={form.tipo}>
            <option value="produção">Em produção</option>
            <option value="transporte">Em transporte</option>           
            <option value="pronta">Pronta para uso</option> 
          </select>

          <div className={styles.buttons}>
            <button type="submit" className={styles.submit}>Cadastrar</button>
            <button type="button" className={styles.cancel} onClick={close}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}