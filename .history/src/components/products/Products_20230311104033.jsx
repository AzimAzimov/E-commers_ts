import React from 'react'

import styles from "../../styles/Products.module.css"

const Products = ({ title, products = [] }) => {
  console.log(title);

  return (
    <section>
      {title && <h2>{title}</h2>}
      {
        products.map()
      }
    </section>
  )
}

export { Products }