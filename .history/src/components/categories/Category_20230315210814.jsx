import React from 'react'
import { useParams } from 'react-router-dom'

import styles from '../../'
import { useGetProductsQuery } from '../../featuries/api/apiSlice'


const Category = () => {
  const { id } = useParams()
  const { data } = useGetProductsQuery({ categoryId: id })

  console.log("rrr", data);

  return (
    <section>
      
    </section>
  )
}

export { Category }