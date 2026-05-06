"use client";
import styles from "./Modal.module.css";
import { useState } from "react";

export default function ModalIniciar({ close }) {
    const [form, setForm] = useState({
            id: "",
          });
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Etapa iniciada!:", form);
    close();
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Iniciar Etapa</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" placeholder="ID da Etapa" />
        <div className={styles.buttons}>
            <button className={styles.submit}>Iniciar</button>
          <button className={styles.cancel}  onClick={close}>Cancelar</button>
          
        </div>
        </form>
      </div>
    </div>
  );
}