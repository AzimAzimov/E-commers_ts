import React from 'react'

import styles from '../../styles/Home.module.css'
import bannerImg from '../../assets/images/banner.png'

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.left}>
        <p className={styles.content}>
          NEW YEAR
          <span>SALE</span>
        </p>
        <button className={styles.more}>See more</button>
      </div>
      <div 
        className={styles.right}
        
      >

      </div>
    </section>
  )
}

export { Banner }