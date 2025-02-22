import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import ToPage from './ToPage';
import ArticlePage from './ArticlePage';
import AboutPage from './AboutPage';
// import RouterApp from './RouterApp';
import RouterNav from './RouterNav';


const routesLink = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RouterNav />}>
      <Route path='' element={<ToPage />} />
      <Route path='article' element={<ArticlePage />} />
      <Route path='about' element={<AboutPage />} />
    </Route>
  )
);

export default routesLink;