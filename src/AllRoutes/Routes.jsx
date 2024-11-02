import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../Layouts/PublicLayout";
import HomePage from "../pages/HomePage";
import DashboardLayout from "../Layouts/DashboardLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
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
