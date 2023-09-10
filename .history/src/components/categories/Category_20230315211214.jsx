import React from 'react'
import { useParams } from 'react-router-dom'

import styles from '../../styles/Category.module.css'
import { useGetProductsQuery } from '../../featuries/api/apiSlice'


const Category = () => {
  const { id } = useParams()
  const { data } = useGetProductsQuery({ categoryId: id })

  console.log("rrr", data);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{'hhhhh'}</h2>
      <form className={styles.filters} onSubmit={}></form>
    </section>
  )
}

export { Category }