import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Route } from 'react-router-dom';


// layouts
import MainRoot from './layouts/MainRoot';
import AccountsRoot from './layouts/AccountsRoot';


// pages
import Home from './pages/Home';
import AccountDetail from './pages/AccountDetail';
import AllAccounts from './pages/AllAccounts';


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainRoot />}>

        <Route index element={<Home />} />

        <Route path='/accounts' element={<AccountsRoot />}>
          <Route index element={<AllAccounts />} />
          <Route path='account/:accountId' element={<AccountDetail />} />
        </Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
};

export default App;