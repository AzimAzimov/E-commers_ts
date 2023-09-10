import React from 'react'

import styles from '../../styles/Footer.module.css'
import { ROUTES } from '../../utils/routes'
import LOGO from '../../assets/images/logo.svg'

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <LinK to={ROUTES.HOME}>
          <img src={LOGO} alt="logo" />
        </LinK>
      </div>
    </section>
  )
}

export { Footer }