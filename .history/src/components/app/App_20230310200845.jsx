import React from 'react'
import { Header } from '../header/Header'

import { AppRoutes } from '../routes/Routes'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <AppRoutes/>
      <Footer/>
    </div>
  )
}

export { App }