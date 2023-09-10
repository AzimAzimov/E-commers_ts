import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from '../../styles/Sidebar.module.css'


const SideBar = () => {
  return (
    < className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink>Link</NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.footer}>
        <a href="/help" target="_blank" className={styles.link}>Help</a>
        <a href="/terms" target="_blank" className={styles.link} style={{ textDecoration: "underline" }}>Terms & Conditions</a>
      </div>
    </ы>
  )
}

export { SideBar }