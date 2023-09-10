import React from 'react'

import styles from '../../styles/Categories.module.css'


const Categories = ({ title, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <section className={styles.section}>
      <h2>{}</h2>
    </section>
  )
}

export { Categories }