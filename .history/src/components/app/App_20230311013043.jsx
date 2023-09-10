import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCategories } from '../../featuries/categories/categoriesSlice'

import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'
import { AppRoutes } from '../routes/Routes'
import { SideBar } from '../sidebar/SideBar'


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories)
  })

  return (
    <div className='app'>
      <Header />

      <div className="container">
        <SideBar/>
        <AppRoutes/>
      </div>
      
      <Footer/>
    </div>
  )
}

export { App }