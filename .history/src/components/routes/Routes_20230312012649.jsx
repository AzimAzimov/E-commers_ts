import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home } from '../home/Home'


const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route index element={<Sin />} />
  </Routes>
)
export { AppRoutes }