import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import styles from '../../styles/Category.module.css'
import { useGetProductsQuery } from '../../featuries/api/apiSlice'


const Category = () => {
  const defaultParams = {
    title: "",
    price_min: 0,
    price_max: 0,
    categoryId: id,
  }
  const { id } = useParams()
  const [params, setParams] = useState(defaultParams)
  const { data } = useGetProductsQuery(params)


  console.log("rrr", data);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{'hhhhh'}</h2>
      <form className={styles.filters} onSubmit={()=> {}}>
        <div className={styles.filter}>
          <input 
            type="text" 
            name={"title"} 
            placeholder="Product name"
            onChange={() => {}} 
          />
        </div>
      </form>
    </section>
  )
}

export { Category }