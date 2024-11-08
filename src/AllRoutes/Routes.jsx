import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import PublicLayout from "../Layouts/PublicLayout";
import AboutUs from "../pages/AboutUs";
import Author from "../pages/Author";
import CategoryPage from "../pages/CategoryPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import ErrorPage from "../pages/ErrorPage";
import GenrePage from "../pages/GenrePage";
import HomePage from "../pages/HomePage";
import NehajAdminLogin from "../pages/NehajAdminLogin";
import Notice from "../pages/Notice";
import SearchResultPage from "../pages/SearchResultPage";
import SingleStoryPostPage from "../pages/SingleStoryPostPage";
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
        path: "/nehaj-admin-login",
        element: (
          <UnAuthenticatedRoute>
            <NehajAdminLogin />
          </UnAuthenticatedRoute>
        ),
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
      {
        path: "/:genreSlug",
        element: <GenrePage />,
      },
      {
        path: "/category/:categorySlug",
        element: <CategoryPage />,
      },
      {
        path: "/search",
        element: <SearchResultPage />,
      },
      {
        path: "/category/:categorySlug/:storySlug",
        element: <SingleStoryPostPage />,
      },
    ],
  },
  {
    path: "/admin-dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "/admin-dashboard",
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
