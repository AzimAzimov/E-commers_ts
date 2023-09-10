import React from 'react'
import { Link } from 'react-router-dom';

import styles from "../../styles/Products.module.css"

const Products = ({ title, products = [] }) => {
  console.log(title);

  return (
    <section>
      {title && <h2>{title}</h2>}
      <div className={styles.list}>
        {products.map(({ id, images, title, category: { name: cat }, price }) => {
          return (
            <Link to={`/products/${id}`} key={id} className={styles.product}>
              <div 
                className={styles.image} 
                style={{ backgroundImage: `url(${images[0]})` }}
              />
              <div className={styles.wrapper}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.cat}>{cat}</div>
                <div className={styles.info}>
                  <div className={styles.prices}>
                    <div className={styles.price}>{price}$</div>
                    <div className={styles.oldPrice}>
                      {Math.floor(price * )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )})
        }
      </div>
    </section>
  )
}

export { Products }