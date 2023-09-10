import React from 'react'

import { Poster } from '../poster/Poster'
import { Products } from '../products/Products'
import { useSelector } from 'react-redux';

const Home = () => {

  const { products } = useSelector(({  }))

  return (
    <>
      <Poster /> 
      <Products />
    </>
  )
}

export { Home }