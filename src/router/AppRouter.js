import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import RootLayout from "../layout/RootLayout";
import AccountPage from "../pages/AccountPage";

const router = createBrowserRouter([
  {
    path: "/account",
    element: <AccountPage />
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [

    ]
  },
]);

const AppRouter = () => {
  return (
      <RouterProvider router={router} />
  )
}

export default AppRouter
