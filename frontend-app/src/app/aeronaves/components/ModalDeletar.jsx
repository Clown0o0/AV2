"use client";

import { useState } from "react";
import styles from "./Modal.module.css";

export default function ModalEditar({ close }) {
  const [form, setForm] = useState({
   código: "",

  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Aeronave Deletada:", form);
    close();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Deletar Aeronave</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input name="codigo" placeholder="Código (*OBRIGATÓRIO)" onChange={handleChange} required />
          <div className={styles.buttons}>
            <button type="submit" className={styles.submit}>Deletar</button>
            <button type="button" className={styles.cancel} onClick={close}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}