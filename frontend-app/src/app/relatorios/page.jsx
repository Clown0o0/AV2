"use client";
import { useState } from "react";
import styles from "./Relatorio.module.css";
import ModalGerarRelatorio from "./components/ModalGerarRelatorio";
import ModalVisualizarRelatorio from "./components/ModalVisualizarRelatorio";
import { FileText } from "lucide-react";

export default function RelatoriosPage() {
  const [relatorios, setRelatorios] = useState([
    { id: 1, titulo: "Relatório 1" },
    { id: 2, titulo: "Relatório 2" },
    { id: 3, titulo: "Relatório 3" },
    { id: 4, titulo: "Relatório 4" },
    { id: 5, titulo: "Relatório 5" },
    { id: 6, titulo: "Relatório 6" },
    { id: 7, titulo: "Relatório 7" },
    { id: 8, titulo: "Relatório 8" },
    { id: 9, titulo: "Relatório 9" },
    { id: 10, titulo: "Relatório 10" },
    { id: 11, titulo: "Relatório 11" },
    { id: 12, titulo: "Relatório 12" },
    { id: 13, titulo: "Relatório 13" },
    { id: 14, titulo: "Relatório 14" },
  ]);

  const [showModalGerar, setShowModalGerar] = useState(false);
  const [selectedRelatorio, setSelectedRelatorio] = useState(null);

  const handleOpenModalGerar = () => setShowModalGerar(true);
  const handleCloseModalGerar = () => setShowModalGerar(false);

  const handleOpenRelatorio = (relatorio) => {
    setSelectedRelatorio(relatorio);
  };

  const handleCloseRelatorio = () => {
    setSelectedRelatorio(null);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>RELATÓRIOS</h1>
      
      <div className={styles.topBar}>
        <button onClick={handleOpenModalGerar} className={styles.btn}>
          Gerar relatório
        </button>
      </div>

      <div className={styles.gridContainer}>
        {relatorios.map((rel) => (
          <div
            key={rel.id}
            className={styles.card}
            onClick={() => handleOpenRelatorio(rel)}
          >
            <FileText className={styles.icon} size={40} />
            <p>{rel.titulo}</p>
          </div>
        ))}
      </div>

      {showModalGerar && <ModalGerarRelatorio onClose={handleCloseModalGerar} />}
      
      {selectedRelatorio && (
        <ModalVisualizarRelatorio 
          relatorio={selectedRelatorio} 
          onClose={handleCloseRelatorio} 
        />
      )}
    </div>
  );
}