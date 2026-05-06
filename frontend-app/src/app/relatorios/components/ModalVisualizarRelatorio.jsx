"use client";

import styles from "./Modal.module.css";

export default function ModalVisualizarRelatorio({ relatorio, onClose }) {
  if (!relatorio) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>RELATÓRIO DA AERONAVE</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        <div className={styles.modalBody}>
      
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Informações da aeronave:</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Código:</span>
                <span className={styles.infoValue}>1</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Modelo:</span>
                <span className={styles.infoValue}>1</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Tipo:</span>
                <span className={styles.infoValue}>Militar</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Capacidade:</span>
                <span className={styles.infoValue}>2 passageiros</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Alcance:</span>
                <span className={styles.infoValue}>3 km</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Cliente:</span>
                <span className={styles.infoValue}>Pedro</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Data de Entrega:</span>
                <span className={styles.infoValue}>01/02/2007</span>
              </div>
            </div>
          </section>

        
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Peças usadas:</h3>
            <div className={styles.list}>
              <div className={styles.listItem}>
                1. Tipo | Tipo nacional | Fornecedor: | Status: em produção
              </div>
            </div>
          </section>

         
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Etapas de produção da aeronave:</h3>
            <div className={styles.list}>
              <div className={styles.listItem}>
                1. Funcionário(s): Pedrinho | Prazo: 01/02/2007 | Status: 0
              </div>
            </div>
          </section>

         
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Resultado dos testes:</h3>
            <div className={styles.list}>
              <div className={styles.listItem}>
                1- eletrico | Resultado: aprovado
              </div>
            </div>
          </section>

          
          <section className={styles.footer}>
            <div className={styles.emissionDate}>
              Data de emissão: 09/10/2025
            </div>
            <div className={styles.signature}>
              <strong>AERONAVE ELABORADA</strong>
            </div>
          </section>
        </div>

        <div className={styles.modalFooter}>
          <button className={styles.secondaryButton} onClick={onClose}>
            Fechar
          </button>
          <button className={styles.primaryButton}>
            Exportar PDF
          </button>
        </div>
      </div>
    </div>
  );
}