import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import ToPage from './ToPage';
import ArticlePage from './ArticlePage';
import AboutPage from './AboutPage';


const routesBasic = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<ToPage />} />
      <Route path='/article' element={<ArticlePage />} />
      <Route path='/about' element={<AboutPage />} />
    </>
  )
);

export default routesBasic;