import React from 'react'
import { useParams } from 'react-router-dom'


const Category = () => {
  const { id } = useParams()
  const { data } = useGetPro

  return (
    <div>Category</div>
  )
}

export { Category }