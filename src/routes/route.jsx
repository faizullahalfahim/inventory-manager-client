import React from 'react';

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from '../layouts/HomeLayout';
import AllModels from '../components/AllModels';
import AllModelsLayout from '../layouts/AllModelsLayout';
import AddModelLayout from '../layouts/AddModelLayout';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout> </HomeLayout>,
    children: [
        {
            path: "/",
            element:<HomeLayout> </HomeLayout>
        },
       
    ]
  },
  {
    path: "/",
    element: <AuthLayout> </AuthLayout>,
    children: [
        {
            path: "/auth/login",
            element: <Login> </Login>
        },
        {
            path: "/auth/register",
            element: <Register> </Register>
        }
    ]

  },
  {
    path: "/allmodel", 
    element: <AllModelsLayout> </AllModelsLayout>
  },
  {
    path: "/addmodel",
    element: <AddModelLayout> </AddModelLayout>
  }
]);

export default router;