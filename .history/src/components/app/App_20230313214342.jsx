import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'
import { AppRoutes } from '../routes/Routes'
import { SideBar } from '../sidebar/SideBar'
import { getCategories } from '../../featuries/categories/categoriesSlice'
import { getProducts } from '../../featuries/products/productsSlice'
import { UserForm } from '../user/UserForm'


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className='app'>
      <Header />
      <UserForm />
      <div className="container">
        <SideBar/>
        <AppRoutes/>
      </div>
      <Footer/>
    </div>
  )
}

export { App }