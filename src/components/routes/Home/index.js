import React from "react"
import { Link } from "gatsby"

import Layout from "../../common/Layout"
import Content from "../../common/Content"
import SEO from "../../common/Seo"
import styles from "./home.module.scss"

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <h1>
          A sisterhood that aims to inspire and get inspired as we grow into our
          careers and ourselves.
        </h1>
      </div>
    </div>
    <Content>
      <h2>What is The Growth Society?</h2>
      <p>
        The Growth Society is a community founded in 2020 by Rose Reid and
        Madeleine Schönemann. We're a sisterhood of like-minded women who share
        ideas, support, and uplift each other. Together we'll navigate this
        strange thing called life.
      </p>
    </Content>
  </Layout>
)

export default Home
