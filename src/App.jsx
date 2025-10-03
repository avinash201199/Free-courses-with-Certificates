import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import AboutPage from "./components/AboutPage";
import Main from "./components/main";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import Signup from "./components/SignUp";

export default function App() {
  const [isAuth, setIsAuth] = useState(false); // Track login state

  // Pass `isAuth` and `setIsAuth` to Login/Signup and Layout if needed
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout isAuth={isAuth} />, // Pass auth state to layout if needed
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute isAuth={isAuth}>
              <Main />
            </ProtectedRoute>
          ),
        },
        {
          path: "dashboard",
          element:<Dashboard />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "login",
          element: <Login onLogin={setIsAuth} />,
        },
        {
          path: "signup",
          element: <Signup onSignup={setIsAuth} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
