import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

const router = createBrowserRouter([
    {
        path: "/admin",
        element: <LoginPage />,
    },
    {
        path: "/dashboard",
        element: <DashboardPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <ToastContainer />
    </React.StrictMode>
);
