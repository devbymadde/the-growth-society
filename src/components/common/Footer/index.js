import styles from "./footer.module.scss"
import React from "react"

const Footer = () => (
  <footer className={styles.footer}>
    © {new Date().getFullYear()} The Growth Society
  </footer>
)
export default Footer
