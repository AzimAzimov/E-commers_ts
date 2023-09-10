import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useGetProductQuery } from '../../featuries/api/apiSlice';
import { Product } from '../product/Product';
import { ROUTES } from './../../utils/routes';


const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id })
  const navigate = useNavigate();

  useEffect(() => {
    if(!isFetching && isLoading && !isSuccess) {
      navigate(ROUTES.HOME)
    }

  }, [isLoading, isFetching, isSuccess])

  return (
    <div>
      <Product {...}/>
    </div>
  )
}

export { SingleProduct }