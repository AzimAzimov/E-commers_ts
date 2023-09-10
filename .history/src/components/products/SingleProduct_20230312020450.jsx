import React from 'react'
import { useParams } from 'react-router-dom'


const SingleProduct = () => {
  const { id } = useParams();
  const { data } = useGet

  return (
    <div>SingleProduct</div>
  )
}

export { SingleProduct }