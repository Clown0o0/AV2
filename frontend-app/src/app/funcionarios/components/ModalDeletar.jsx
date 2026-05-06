"use client";

import { useState } from "react";
import styles from "./Modal.module.css";

export default function ModalCadastrar({ close }) {
  const [form, setForm] = useState({
    id: "",
   
    
   
  
   

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
        <h2>Deletar Funcionário</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input name="id" placeholder="ID (*OBRIGATÓRIO)" onChange={handleChange} required />
          <div className={styles.buttons}>
            <button type="submit" className={styles.submit}>Deletar</button>
            <button type="button" className={styles.cancel} onClick={close}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );

}
