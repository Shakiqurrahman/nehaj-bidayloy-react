import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import PublicLayout from "../Layouts/PublicLayout";
import AboutUs from "../pages/AboutUs";
import Author from "../pages/Author";
import HomePage from "../pages/HomePage";
import NehajAdminLogin from "../pages/NehajAdminLogin";
import Notice from "../pages/Notice";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/nehaj-admin-login",
        element: <NehajAdminLogin />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/author",
        element: <Author />,
      },
      {
        path: "/notice",
        element: <Notice />,
      },
    ],
  },
  {
    path: "/admin-dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin-dashboard",
        element: (
          // <PrivateRoute>
          <h1>Hello dashboard page</h1>
          // </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    // element: <ErrorPage />,
    element: <h1>Error Page...</h1>,
  },
]);
