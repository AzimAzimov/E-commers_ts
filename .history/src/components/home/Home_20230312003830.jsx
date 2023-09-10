import React from 'react'

import { Poster } from '../poster/Poster'
import { Products } from '../products/Products'
import { useSelector } from 'react-redux';
import { Categories } from '../categories/Categories';

const Home = () => {

  const { products, categories } = useSelector((state) => state)

  return (
    <>
      <Poster /> 
      <Products products={products} amount={5} title="Trending" />
      <Categories products={categories} amount={5} title="Trending" />
    </>
  )
}

export { Home }