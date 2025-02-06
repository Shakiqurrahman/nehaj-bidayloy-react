import React from "react";

import AllAuthor from "../pages/Dashboard/AllAuthor";
import AllCategories from "../pages/Dashboard/AllCategories";
import AllQuotes from "../pages/Dashboard/AllQuotes";
import AllWritings from "../pages/Dashboard/AllWritings";
import CreateAuthor from "../pages/Dashboard/CreateAuthor";
import CreateCategory from "../pages/Dashboard/CreateCategory";
import CreateQuotes from "../pages/Dashboard/CreateQuotes";
import CreateStory from "../pages/Dashboard/CreateStory";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import EditAuthor from "../pages/Dashboard/EditAuthor";
import EditCategory from "../pages/Dashboard/EditCategory";
import EditQuotes from "../pages/Dashboard/EditQuotes";
import EditStory from "../pages/Dashboard/EditStory";

export const AdminPaths = [
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
  {
    path: "/admin-dashboard/quotes",
    element: <AllQuotes />,
  },
  {
    path: "/admin-dashboard/quotes/create",
    element: <CreateQuotes />,
  },
  {
    path: "/admin-dashboard/quotes/edit",
    element: <EditQuotes />,
  },
];
