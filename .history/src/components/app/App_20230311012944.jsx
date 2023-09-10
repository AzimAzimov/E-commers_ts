import React from 'react'
import { useDispatch } from 'react-redux'

import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'
import { AppRoutes } from '../routes/Routes'
import { SideBar } from '../sidebar/SideBar'


const App = () => {

  const dispatch = useDispatch();
  

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