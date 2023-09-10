import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import styles from '../../styles/Category.module.css'
import { useGetProductsQuery } from '../../featuries/api/apiSlice'


const Category = () => {
  const { id } = useParams()
  const defaultParams = {
    title: "",
    price_min: 0,
    price_max: 0,
    categoryId: id,
  }
  const [params, setParams] = useState(defaultParams)
  const { data, isLoading, isSuccess } = useGetProductsQuery(params)

  useEffect(() => {
    if(!id) return;
    setParams({ ...defaultParams, categoryId: id })
  }, [id])


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
            value={params.title}
          />
        </div>
        <div className={styles.filter}>
          <input 
            type="number" 
            name={"price_min"} 
            placeholder="0"
            onChange={() => {}} 
            value={params.price_min}
          />
        </div>
        <div className={styles.filter}>
          <input 
            type="number" 
            name={"price_max"} 
            placeholder="0"
            onChange={() => {}} 
            value={params.price_max}
          />
        </div>
        <button type='submit' hidden></button>
      </form>

      {isLoading 
        ? <div className="preloader">Loading</div>
        : !isSuccess || !data.length 
        ? <div className={classname.}></div> 
      }
    </section>
  )
}

export { Category }