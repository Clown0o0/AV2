"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const Page = () => {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cargo, setCargo] = useState("administrador"); // campo novo
  const router = useRouter();
  const { login } = useAuth();

  const toggleMostrarSenha = () => setMostrarSenha(!mostrarSenha);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Exemplo simples: email e senha não importam, só define o módulo
    login(email || "Usuário", cargo);
    router.push("/home");
  };

  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <img
          src="/images/LOGOAVIAO.png"
          alt="imagem aerocode logo"
          className={styles.imgPlaceholder}
        />
      </aside>

      <main className={styles.main}>
        <div className={styles.loginBox}>
          <h2 className={styles.loginh}>LOGIN - CADASTRAR</h2>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                type={mostrarSenha ? "text" : "password"}
                placeholder="SENHA"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className={styles.input}
              />
              <button
                type="button"
                onClick={toggleMostrarSenha}
                className={styles.eyeButton}
              >
                {mostrarSenha ? "" : ""}
              </button>
            </div>

            
            <div className={styles.inputGroup}>
              <select
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
                className={styles.selectCargo}
              >
                <option value="administrador">Administrador</option>
                <option value="engenheiro">Engenheiro</option>
                <option value="operador">Operador</option>
              </select>
            </div>

            <button type="submit" className={styles.submitButton}>
              CONTINUAR
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Page;
