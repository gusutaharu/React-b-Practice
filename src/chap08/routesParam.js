import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import RouterParam from './RouterParam'
import ToPage from './ToPage'
import BookPage from './BookPage'
import SearchPage from './SearchPage'
import NotFoundPage from './NotFoundPage'
import BookQueryPage from './BookQueryPage'
import BookStatePage from './BookStatePage'
import InvalidParamsPage from './InvalidParamsPage'
import WeatherPage from './WeatherPage'

const routesParam = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterParam />}>
      <Route path='/' element={<ToPage />} />
      <Route path='/book/:isbn?' element={<BookPage />}
      errorElement={<InvalidParamsPage />} />
      <Route path='/bookQuery' element={<BookQueryPage />} />
      <Route path='/bookState' element={<BookStatePage />} />
      <Route path='/search/*' element={<SearchPage />}/>
      {/* <Route path='/weather/:city' element={<WeatherPage />}
        loader={({ params }) => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.city}&lang=ja&appid=xxxxxxxxxx`)}
      /> */}
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
)

export default routesParam