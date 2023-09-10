import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../../styles/Footer.module.css'
import { ROUTES } from '../../utils/routes'
import LOGO from '../../assets/images/logo.svg'


const Footer = () => (
  <section className={styles.footer}>
    <div className={styles.logo}>
      <Link to={ROUTES.HOME}>
        <img src={LOGO} alt="logo" />
      </Link>
    </div>
    <div className={styles.rights}>
      Developed by{" "}
      <Link 
        to={"/"}
        target="_blank"
        rel="noreferrer"
      >
        Azim
      </Link>
    </div>
    <div className={styles.socials}>
      <Link
        href="#" 
        target="_blank"
        rel="noreferrer"
      >
        <svg className='icon'>
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
        </svg>
      </Link>
      <a 
        href="#" 
        target="_blank"
        rel="noreferrer"
      >
        <svg className='icon'>
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
        </svg>
      </a>
      <a 
        href="#" 
        target="_blank"
        rel="noreferrer"
      >
        <svg className='icon'>
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
        </svg>
      </a>
    </div>
  </section>
)

export { Footer }