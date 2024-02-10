import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Route } from 'react-router-dom';


// layouts
import MainRoot from './layouts/MainRoot';


// pages
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainRoot />}>
        <Route index element={<Home />} />
        <Route path='/account/:accountId' element={<ProductDetail />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
};

export default App;