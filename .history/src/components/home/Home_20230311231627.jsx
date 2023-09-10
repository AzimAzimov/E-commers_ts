import React from 'react'

import { Poster } from '../poster/Poster'
import { Products } from '../products/Products'
import { useSelector } from 'react-redux';

const Home = () => {

  const { list } = useSelector(({ products }) => products)

  return (
    <>
      <Poster /> 
      <Products products={list} />
    </>
  )
}

export { Home }