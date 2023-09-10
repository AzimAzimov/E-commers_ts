import React from 'react'

import { Poster } from '../poster/Poster'
import { Products } from '../products/Products'

const Home = () => {

  const { products } = use

  return (
    <>
      <Poster /> 
      <Products />
    </>
  )
}

export { Home }