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
                style={{ backgroundImage }}
              >

              </div>
            </Link>
          )})
        }
      </div>
    </section>
  )
}

export { Products }