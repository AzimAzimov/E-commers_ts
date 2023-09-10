import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../featuries/api/apiSlice';


const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id })

  useEffect(() => {
    if()
  }, [isLoading, isFetching, isSuccess])

  return (
    <div>SingleProduct</div>
  )
}

export { SingleProduct }