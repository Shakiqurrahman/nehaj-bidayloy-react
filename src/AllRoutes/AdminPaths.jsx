import React from "react";

import AllAuthor from "../pages/Dashboard/AllAuthor";
import AllCategories from "../pages/Dashboard/AllCategories";
import AllGenres from "../pages/Dashboard/AllGenres";
import AllNotice from "../pages/Dashboard/AllNotice";
import AllQuotes from "../pages/Dashboard/AllQuotes";
import AllStudyCircle from "../pages/Dashboard/AllStudyCircle";
import AllWritings from "../pages/Dashboard/AllWritings";
import CreateAuthor from "../pages/Dashboard/CreateAuthor";
import CreateCategory from "../pages/Dashboard/CreateCategory";
import CreateGenre from "../pages/Dashboard/CreateGenre";
import CreateNotice from "../pages/Dashboard/CreateNotice";
import CreateQuotes from "../pages/Dashboard/CreateQuotes";
import CreateStory from "../pages/Dashboard/CreateStory";
import CreateStudyCircle from "../pages/Dashboard/CreateStudyCircle";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import EditAuthor from "../pages/Dashboard/EditAuthor";
import EditCategory from "../pages/Dashboard/EditCategory";
import EditGenre from "../pages/Dashboard/EditGenre";
import EditQuotes from "../pages/Dashboard/EditQuotes";
import EditStory from "../pages/Dashboard/EditStory";
import EditStudyCircle from "../pages/Dashboard/EditStudyCircle";

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
    path: "/admin-dashboard/genres",
    element: <AllGenres />,
  },
  {
    path: "/admin-dashboard/genres/create",
    element: <CreateGenre />,
  },
  {
    path: "/admin-dashboard/genres/edit",
    element: <EditGenre />,
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
  {
    path: "/admin-dashboard/study-circle",
    element: <AllStudyCircle />,
  },
  {
    path: "/admin-dashboard/study-circle/create",
    element: <CreateStudyCircle />,
  },
  {
    path: "/admin-dashboard/study-circle/edit",
    element: <EditStudyCircle />,
  },
  {
    path: "/admin-dashboard/notice",
    element: <AllNotice />,
  },
  {
    path: "/admin-dashboard/notice/create",
    element: <CreateNotice />,
  },
  {
    path: "/admin-dashboard/notice/edit",
    element: <CreateNotice />,
  },
];
