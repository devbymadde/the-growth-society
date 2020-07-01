import styles from "./content.module.scss"
import React from "react"

const Content = props => (
  <section>
    <div className={styles.content}>{props.children}</div>
  </section>
)

export default Content
