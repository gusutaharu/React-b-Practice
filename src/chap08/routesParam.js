import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import RouterParam from './RouterParam'
import ToPage from './ToPage'
import BookPage from './BookPage'
import SearchPage from './SearchPage'
import NotFoundPage from './NotFoundPage'
import BookQueryPage from './BookQueryPage'

const routesParam = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterParam />}>
      <Route path='/' element={<ToPage />} />
      <Route path='/book/:isbn?' element={<BookPage />} />
      <Route path='/bookQuery' element={<BookQueryPage />} />
      <Route path='/search/*' element={<SearchPage />}/>
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
)

export default routesParam