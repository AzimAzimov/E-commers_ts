import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useGetProductQuery } from '../../featuries/api/apiSlice';
import ProductsSlice, { getRelatedProducts } from '../../featuries/products/productsSlice';
import { Product } from '../product/Product';
import { ROUTES } from './../../utils/routes';
import { useDispatch, useSelector } from 'react-redux';


const SingleProduct = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id })
  const navigate = useNavigate();
  const { related } = useSelector(({ products }) => products)

  useEffect(() => {
    if(!isFetching && isLoading && !isSuccess) {
      navigate(ROUTES.HOME)
    }
  }, [isLoading, isFetching, isSuccess])

  useEffect(() => {
    if(data) {
      dispatch(getRelatedProducts(data.category.id))
    }
  }, [data, dispatch])

  return !data 
    ? <section className='preloader'>Loading...</section>
    : <>
        <Product {...data}/>
        <ProductsSlice products={related} amount={5} title="Related" />
      </>
}

export { SingleProduct }