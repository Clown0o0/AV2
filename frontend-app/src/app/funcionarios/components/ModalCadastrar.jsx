"use client";

import { useState } from "react";
import styles from "./Modal.module.css";

export default function ModalCadastrar({ close }) {
  const [form, setForm] = useState({
    id: "",
    nome: "",
    telefone: "",
    endereco: "",
    usuario: "",
    senha: "",
    nivelPermissao: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Funcionário Cadastrado:", form);
    close();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Cadastrar Funcionário</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input name="id" placeholder="ID" onChange={handleChange} required />
          <input name="nome" placeholder="nome" onChange={handleChange} required />
          <input name="telefone" placeholder="Telefone" onChange={handleChange} required />
          <input name="endereco" placeholder="Endereço" onChange={handleChange} required />
          <input name="senha" placeholder="Senha" onChange={handleChange} required />
          <select name="nivelPermissao" onChange={handleChange} value={form.tipo}>
            <option value="Operador">Operador</option>
            <option value="Administrador">Administrador</option>           
            <option value="Engenheiro">Engenheiro</option>
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