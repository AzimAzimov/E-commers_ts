import React from 'react'

import styles from "../../styles/Products.module.css"

const Products = ({ title, products = [] }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
    </section>
  )
}

export { Products }