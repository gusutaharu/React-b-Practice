import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import RouterParam from './RouterParam'
import ToPage from './ToPage'
import BookPage from './BookPage'

const routesParam = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterParam />}>
      <Route path='/' element={<ToPage />} />
      <Route path='/book/:isbn' element={<BookPage />} />
    </Route>
  )
)

export default routesParam