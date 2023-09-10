import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../../styles/Footer.module.css'
import { ROUTES } from '../../utils/routes'
import LOGO from '../../assets/images/logo.svg'


const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo" />
        </Link>
      </div>
      <div className={styles.rights}>
        Developed by <a href="#" tar>Azim</a>
      </div>
    </section>
  )
}

export { Footer }