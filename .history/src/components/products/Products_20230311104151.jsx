import React from 'react'
import { Link } from 'react-router-dom';

import styles from "../../styles/Products.module.css"

const Products = ({ title, products = [] }) => {
  console.log(title);

  return (
    <section>
      {title && <h2>{title}</h2>}
      {
        products.map((items) => {
          return (
            <Link to={`/products`}>
            
            </Link>
          )
        })
      }
    </section>
  )
}

export { Products }