import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import PublicLayout from "../Layouts/PublicLayout";
import AboutUs from "../pages/AboutUs";
import Author from "../pages/Author";
import CategoryPage from "../pages/CategoryPage";
import Contact from "../pages/Contact";
import AllAuthor from "../pages/Dashboard/AllAuthor";
import AllCategories from "../pages/Dashboard/AllCategories";
import AllWritings from "../pages/Dashboard/AllWritings";
import CreateAuthor from "../pages/Dashboard/CreateAuthor";
import CreateCategory from "../pages/Dashboard/CreateCategory";
import CreateStory from "../pages/Dashboard/CreateStory";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import EditAuthor from "../pages/Dashboard/EditAuthor";
import EditCategory from "../pages/Dashboard/EditCategory";
import EditStory from "../pages/Dashboard/EditStory";
import ErrorPage from "../pages/ErrorPage";
import GenrePage from "../pages/GenrePage";
import HomePage from "../pages/HomePage";
import NehajAdminLogin from "../pages/NehajAdminLogin";
import Notice from "../pages/Notice";
import SearchResultPage from "../pages/SearchResultPage";
import SingleStoryPostPage from "../pages/SingleStoryPostPage";
import StudyCirclePage from "../pages/StudyCirclePage";
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
        path: "/study-circle",
        element: <StudyCirclePage />,
      },
      {
        path: "/notice",
        element: <Notice />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/genre/:genreSlug",
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
      {
        path: "/admin-dashboard/stories",
        element: <AllWritings />,
      },
      {
        path: "/admin-dashboard/stories/create",
        element: <CreateStory />,
      },
      {
        path: "/admin-dashboard/stories/edit",
        element: <EditStory />,
      },
      {
        path: "/admin-dashboard/authors",
        element: <AllAuthor />,
      },
      {
        path: "/admin-dashboard/authors/create",
        element: <CreateAuthor />,
      },
      {
        path: "/admin-dashboard/authors/edit",
        element: <EditAuthor />,
      },
      {
        path: "/admin-dashboard/categories",
        element: <AllCategories />,
      },
      {
        path: "/admin-dashboard/categories/create",
        element: <CreateCategory />,
      },
      {
        path: "/admin-dashboard/categories/edit",
        element: <EditCategory />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
