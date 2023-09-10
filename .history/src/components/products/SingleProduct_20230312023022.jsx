import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../featuries/api/apiSlice';


const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id })
  const navigate = useNavigate();

  useEffect(() => {
    if(!isFetching && isLoading && !isSuccess) {
      navigate.push
    }

  }, [isLoading, isFetching, isSuccess])

  return (
    <div>SingleProduct</div>
  )
}

export { SingleProduct }