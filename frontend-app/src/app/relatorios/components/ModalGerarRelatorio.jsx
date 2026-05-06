"use client";
import { useState } from "react";
import styles from "./Modal.module.css";

export default function ModalGerarRelatorio({ onClose }) {
  const [form, setForm] = useState({
    idAeronave: "",
    idEtapa: "",
    idPeca: "",
    idTeste: "",
    funcionarios: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Gerar relatório com dados:", form);
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Gerar Relatório</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="idAeronave"
            placeholder="ID da Aeronave"
            value={form.idAeronave}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="idEtapa"
            placeholder="ID da Etapa"
            value={form.idEtapa}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="idPeca"
            placeholder="ID da Peça"
            value={form.idPeca}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="idTeste"
            placeholder="ID do Teste"
            value={form.idTeste}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="funcionarios"
            placeholder="Funcionários Associados"
            value={form.funcionarios}
            onChange={handleChange}
          />

          <div className={styles.buttons}>
            <button type="submit" className={styles.submit}>
              GERAR
            </button>
            <button
              type="button"
              className={styles.cancel}
              onClick={onClose}
            >
              CANCELAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
