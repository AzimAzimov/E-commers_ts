import React from 'react'
import { useSelector } from 'react-redux'

import styles from '../../styles/Cart.module.css'


const Cart = () => {

  const { cart } = useSelector(({ user }) => user)

  return (
    <section className={styles.cart}>
      <h2 className={styles.title}>Your cart</h2>

      {!cart.length ? (
        <div className={styles.empty}>Here is empty</div>
      ) : (
        <div className={styles.list}>
          {cart.map((item) => {
            const { title, category, images, price, id, quantity } = item;

            return (
              <div key={id} className={styles.item}>
                <div className={styles.image} style={{ backgroundImage: `url(${images[0]})`}}/>
                <div className={styles.info}>
                  <h3 className={styles.name}>{}</h3>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export { Cart }