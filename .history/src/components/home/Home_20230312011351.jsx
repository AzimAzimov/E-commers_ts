import React, {  } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { Poster } from '../poster/Poster'
import { Products } from '../products/Products'
import { Categories } from '../categories/Categories';
import { Banner } from '../banner/Banner';
import { filterByPrice } from '../../featuries/products/productsSlice';


const Home = () => {
  const dispatch = useDispatch();
  const { products: { list, filtered }, categories } = useSelector((state) => state)

  useEffect(() => {
    if(!list.length) return;
    dispatch(filterByPrice(100))
  }, [dispatch, list.length])

  return (
    <>
      <Poster /> 
      <Products products={list} amount={5} title="Trending" />
      <Categories products={categories.list} amount={5} title="Worth seeing" />
      <Banner />
      <Products products={filtered} amount={5} title="Trending" />
    </>
  )
}

export { Home }