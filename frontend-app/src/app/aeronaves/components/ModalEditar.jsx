"use client";

import { useState } from "react";
import styles from "./Modal.module.css";

export default function ModalEditar({ close }) {
  const [form, setForm] = useState({
   código: "",
    modelo: "",
    tipo: "",
    capacidade: "",
    alcance: "",
    cliente: "",
    dataEntrega: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Aeronave Editada:", form);
    close();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Editar Aeronave</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input name="codigo" placeholder="Código" onChange={handleChange} required />
          <input name="modelo" placeholder="Modelo" onChange={handleChange} required />
          <select name="tipo" onChange={handleChange} value={form.tipo}>
            <option value="Comercial">Comercial</option>
            <option value="Militar">Militar</option>
          </select>
          <input name="capacidade" placeholder="Capacidade" onChange={handleChange} required />
          <input name="alcance" placeholder="Alcance" onChange={handleChange} required />
          <input name="cliente" placeholder="Cliente" onChange={handleChange} required />
          <input type="date" name="dataEntrega" onChange={handleChange} required />


          <div className={styles.buttons}>
            <button type="submit" className={styles.submit}>Editar</button>
            <button type="button" className={styles.cancel} onClick={close}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}