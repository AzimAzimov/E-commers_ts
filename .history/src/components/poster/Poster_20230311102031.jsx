import React from 'react'

import styles from "../../styles/Home.module.css"
import BG from "../../assets/images/computer.png"

const Poster = () => (
  <section className={styles.home}>
    <div className={styles.title}>BIG SALE 20%</div>
    <div className={styles.product}>
      <div className={styles.text}>
        <div className={styles.subtitle}>the bestseller of 2022 </div>
        
      </div>
    </div>
  </section>
)

export { Poster }