import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import styles from '../../styles/Sidebar.module.css'


const SideBar = () => {

  const { list } = useSelector(({ categories }) => categories)
  console.log("list", list);

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          {list.map(( id, name ) => {

          })}
          
        </ul>
      </nav>
      <div className={styles.footer}>
        <a href="/help" target="_blank" className={styles.link}>Help</a>
        <a href="/terms" target="_blank" className={styles.link} style={{ textDecoration: "underline" }}>Terms & Conditions</a>
      </div>
    </section>
  )
}

export { SideBar }