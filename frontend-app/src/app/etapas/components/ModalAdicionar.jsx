"use client";
import styles from "./Modal.module.css";
import { useState } from "react";

export default function ModalAdicionar({ close }) {
    
     const [form, setForm] = useState({
        id: "",
        nome: "",
        prazo: "",
        ordem: "",
        
      });
      const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Etapa Adicionada!:", form);
    close();
    
  };
  return (
    
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Adicionar Etapa</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" placeholder="ID da etapa" />
        <input type="text" placeholder="Nome da Etapa" />
        <input type="text" placeholder="Prazo" />
        <input type="text" placeholder="Ordem da Etapa" />
    
        <div className={styles.buttons}>
          
          <button className={styles.submit}>Salvar</button>
          <button className={styles.cancel} onClick={close}>Cancelar</button>
          
        </div>
        </form>
      </div>
    </div>
  );
}