import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import AccessRequired from "../pages/AccesReq";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import ModelDetails from "../pages/ModelDetails";
import UpdateModel from "../pages/UpdateModel";
import MyModels from "../pages/MyModels";
import MyPurchase from "../pages/MyPurchase";
import NotFound from "../pages/NotFound";
import Home from "../components/Home";
import AllModels from "../components/AllModels";
import AddModel from "../components/AddModel";
import AboutUs from "../components/AboutUs";
import DashboardLayout from "../layouts/DashboardLayout";
import MyProfile from "../components/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, 
    children: [
      {
        index: true,
        element: <Home> </Home>
      },
      {
        path: "/allmodel",
        element: <AllModels></AllModels>,
        loader: () => fetch("https://inventory-maneger-server.vercel.app/models"),
      },
      {
        path: "/addmodel",
        element: (
          <PrivateRoute>
            <AddModel> </AddModel> 
          </PrivateRoute>
        ),
      },
      {
        path: "/my-models",
        element: (
          <PrivateRoute>
            <MyModels />
          </PrivateRoute>
        ),
      },
      {
        path: "/purchase",
        element: (
          <PrivateRoute>
            <MyPurchase />
          </PrivateRoute>
        ),
      },
      {
        path: "/model-details/:id",
        element: <ModelDetails />,
        loader: ({ params }) => fetch(`https://inventory-maneger-server.vercel.app/models/${params.id}`),
      },
      {
        path: "/update-model/:id",
        element: (
          <PrivateRoute>
            <UpdateModel />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://inventory-maneger-server.vercel.app/models/${params.id}`),
      },
      {
        path: "/access-required",
        element: <AccessRequired />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <AboutUs> </AboutUs>
      }
    ],
  },
  {
  path: "/dashboard",
  element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
  children: [
    {
      path: "my-models", 
      element: <MyModels />,
    },
    {
      path: "my-purchase",
      element: <MyPurchase />,
    },
    {
      path: "add-model", 
      element: <AddModel />,
    },
    {
      path: "profile", 
      element: <MyProfile />,
    },
  ],
},
  {
    path: "*",
    element: <NotFound />, 
  },
]);

export default router;