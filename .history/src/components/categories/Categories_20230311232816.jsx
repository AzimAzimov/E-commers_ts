import React from 'react'

import styles from '../../styles/Categories.module.css'


const Categories = ({ title, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.list}>
        {list.map(({ id, name, image }) => (
          <Link to={`${/caregor}`} key={id}>

          </Link>
        ))}
      </div>
    </section>
  )
}

export { Categories }