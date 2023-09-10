import React from 'react'

import styles from "../../styles/Product.module.css"

const Product = () => {
  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div className={styles.current}></div>
      </div>
    </section>
  )
}

export { Product }