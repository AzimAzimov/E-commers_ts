import React from 'react'
import { useSelector } from 'react-redux'

import styles from '../../styles/Cart.module.css'


const Cart = () => {

  const { cart } = useSelector(({ user }) => user)

  return (
    <section className={styles.cart}>
      <h2></h2>
    </section>
  )
}

export { Cart }