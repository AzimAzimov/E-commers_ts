import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ROUTES } from '../../utils/routes'
import { Home } from '../home/Home'
import { SingleProduct } from '../products/SingleProduct'


const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path={ROUTES.} element={<SingleProduct />} />
  </Routes>
)
export { AppRoutes }