import React from 'react'

import styles from '../../styles/Footer.module.css'

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTEs.HOME}>
          <img src={LOGO} alt="logo" />
        </Link>
      </div>
    </section>
  )
}

export { Footer }