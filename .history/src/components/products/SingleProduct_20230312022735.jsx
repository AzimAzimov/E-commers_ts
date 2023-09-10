import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../featuries/api/apiSlice';


const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductQuery({ id })
  console.log("data", isLoading);

  return (
    <div>SingleProduct</div>
  )
}

export { SingleProduct }