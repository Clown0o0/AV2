"use client";
import styles from "./Modal.module.css";

export default function ModalDeletar({ close }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Deletar Teste</h2>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="ID do Teste a Deletar" />
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.btnCancelar} onClick={close}>
            Cancelar
          </button>
          <button className={styles.btnSalvar}>Deletar</button>
        </div>
      </div>
    </div>
  );
}
