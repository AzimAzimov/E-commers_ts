import React from 'react'

import styles from "../../styles/Product.module.css"

const Product = ({ images, title }) => {

  const currentImage = images[0];

  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div 
          className={styles.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        {images.map((image) => {
          return (
            <div 
              key={Math.random}
              className={styles.image}
              style={{ backgroundImage: `url(${image})` }}
              onClick={()=> {}}
            />
          )
        })}
      </div>
      <div className={styles.info}>
        <h1  className={styles.title}>{title}</h1>
        <div className={styles.price}></div>
      </div>
    </section>
  )
}

export { Product }