import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../featuries/api/apiSlice';


const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id })
  const nav

  useEffect(() => {
    if(!isFetching && isLoading && !isSuccess) {

    }

  }, [isLoading, isFetching, isSuccess])

  return (
    <div>SingleProduct</div>
  )
}

export { SingleProduct }