import React from 'react'

import styles from "../../styles/Product.module.css"

const SIZES = [4, 4.5, 5];

const Product = ({ images, title , price, description}) => {
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
        <div className={styles.price}>{price}</div>
        <div className={styles.color}>
          <span>Color:</span> Green
        </div>
        <div className={styles.sizes}>
          <span>Sizes:</span> 
          <div className={styles.list}>
            {SIZES.map((size) => (
              <div 
                className={styles.size}
                onClick={() => {}}
                key={size}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <button className={styles.add}>Add to cart</button>
          <button className={styles.favourite}>Add to favourites</button>
        </div>
        <div className={styles.bottom}>
          <div className={styles.purchase}>19 people pu</div>
        </div>
      </div>
    </section>
  )
}

export { Product }