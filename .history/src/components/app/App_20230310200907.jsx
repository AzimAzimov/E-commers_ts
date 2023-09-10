import React from 'react'

import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'
import { AppRoutes } from '../routes/Routes'

const App = () => {
  return (
    <div className='app'>
      <Header />
      .
      <AppRoutes/>
      <Footer/>
    </div>
  )
}

export { App }