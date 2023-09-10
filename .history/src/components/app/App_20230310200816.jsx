import React from 'react'

import { AppRoutes } from '../routes/Routes'

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <AppRoutes/>
    </div>
  )
}

export { App }