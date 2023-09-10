import React from 'react'
import { Link } from 'react-router-dom';

import styles from "../../styles/Products.module.css"

const Products = ({ title, products = [] }) => {
  console.log(title);

  return (
    <section>
      {title && <h2>{title}</h2>}
      <div className={styles.list}>
        {products.map((items) => {
          return (
            <Link to={`/products/${items.id}`} key={items.id} className={styles.product}>
              <div 
                className={styles.image} 
                style={{ backgroundImage: `url(${items.images[0]})` }}
              />
              <div className={styles.wrapper}>
                <h3 className={styles.title}>{items.title}</h3>
                <div className={styles.cat}>
                  
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