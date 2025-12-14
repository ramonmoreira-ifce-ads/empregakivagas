import React from 'react'
import styles from "./Header.module.css"
export default function Header() {
  return (
      <header className={styles.header}>
        {/* Logo */}
        <div className={styles.logo}>
          EMPREG<span className={styles.aki}>AKI</span>
        </div>

        {/* Menu */}
        <nav className={styles.menu}>
          <ul>
            <li>Vagas</li>
            <li>Empresas</li>
            <li>Blog</li>
          </ul>
          {/* <Link href="/vagas"></Link>
          <Link href="/Empresas"></Link>
          <Link href="/Blog"></Link> */}
        </nav>

        {/* Botão */}
        {/* <Link href="/cadastro" className={styles.button}>
        </Link> */}
        <button className={styles.button}>Cadastro</button>
      </header>
  );
}
