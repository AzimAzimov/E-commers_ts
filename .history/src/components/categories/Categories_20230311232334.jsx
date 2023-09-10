import React from 'react'

import styles from '../../'

const Categories = ({ title, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <section>
      
    </section>
  )
}

export { Categories }