import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import PublicLayout from "../Layouts/PublicLayout";
import AboutUs from "../pages/AboutUs";
import AuthorsPage from "../pages/AuthorsPage";
import CategoryPage from "../pages/CategoryPage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import GenrePage from "../pages/GenrePage";
import HomePage from "../pages/HomePage";
import NehajAdminLogin from "../pages/NehajAdminLogin";
import Notice from "../pages/Notice";
import PatchokroPage from "../pages/PatchokroPage";
import SingleBlogPost from "../pages/SingleBlogPost";
import SingleStudyCirclePost from "../pages/SingleStudyCirclePost";
import { AdminPaths } from "./AdminPaths";
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
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/notice",
        element: <Notice />,
      },
      {
        path: "/study-circle",
        element: <PatchokroPage />,
      },
      {
        path: "/category/:categorySlug",
        element: <CategoryPage />,
      },
      {
        path: "/genre/:genreSlug",
        element: <GenrePage />,
      },
      {
        path: "/story/:storyId",
        element: <SingleBlogPost />,
      },
      {
        path: "/study-circle/:studyCircleId",
        element: <SingleStudyCirclePost />,
      },
    ],
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
    path: "/admin-dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: AdminPaths,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
