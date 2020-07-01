import { Link } from "gatsby"
import PropTypes from "prop-types"
import styles from "./header.module.scss"
import React from "react"

import logo from "./logo.svg"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <Link to="/">
      <img src={logo} alt="The Growth Society Logotype"></img>
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
