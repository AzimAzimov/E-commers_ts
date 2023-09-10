import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from '../../styles/Sidebar.module.css'


const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink/>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export { SideBar }