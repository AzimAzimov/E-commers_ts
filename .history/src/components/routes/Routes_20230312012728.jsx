import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home } from '../home/Home'
import { SingleProduct } from '../products/SingleProduct'


const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path={Route} element={<SingleProduct />} />
  </Routes>
)
export { AppRoutes }