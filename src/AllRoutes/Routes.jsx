import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import PublicLayout from "../Layouts/PublicLayout";
import AboutUs from "../pages/AboutUs";
import AuthorsPage from "../pages/AuthorsPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import NehajAdminLogin from "../pages/NehajAdminLogin";
import Notice from "../pages/Notice";
import { AdminRoutes } from "./AdminRoutes";
import AdminRoute from "./private-route/AdminRoute";
import UnAuthenticatedRoute from "./private-route/UnAuthenticatedRoute";

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
        path: "/author",
        element: <AuthorsPage />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/notice",
        element: <Notice />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <UnAuthenticatedRoute>
        <NehajAdminLogin />
      </UnAuthenticatedRoute>
    ),
  },
  {
    path: "/admin-dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: AdminRoutes,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
