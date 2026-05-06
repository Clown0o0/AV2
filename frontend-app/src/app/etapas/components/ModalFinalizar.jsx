"use client";
import styles from "./Modal.module.css";
import { useState } from "react";
export default function ModalFinalizar({ close }) {
    const [form, setForm] = useState({
        id: "",
        nome: "",
        prazo: "",
        ordem: "",
        
      });
      const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Etapa Finalizada!:", form);
    close();
    
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Finalizar Etapa</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" placeholder="ID da Etapa" />
        <div className={styles.buttons}>
        <button className={styles.submit}>Finalizar</button>
          <button className={styles.cancel} onClick={close}>Cancelar</button>
          
        </div>
        </form>
      </div>
    </div>
  );
}