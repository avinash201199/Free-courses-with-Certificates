import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BookmarkProvider } from "./context/BookmarkContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import AboutPage from "./components/AboutPage";
import Main from "./components/main";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LearningRoadmap from "./components/LearningRoadmap";

const freeCourses = [
  "Coursera Python Basics",
  "edX Data Science Fundamentals",
  "Kaggle Machine Learning",
];
import Bookmarks from "./components/Bookmarks";

export default function App() {
  const [isAuth, setIsAuth] = useState(false); // Track login state
  const [userName, setUserName] = useState("");
  // Pass `isAuth` and `setIsAuth` to Login/Signup and Layout if needed
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuth = () => {
      setUserName("");
      setIsAuth(false);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout isAuth={isAuth} userName={userName} isLoggedIn={isLoggedIn} handleAuth={handleAuth}/>, // Pass auth state to layout if needed
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: (
            // <ProtectedRoute isAuth={isAuth}>
            <Main />
            // </ProtectedRoute>
          ),
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
       
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "login",
          element: <Login onLogin={setIsAuth} setUserName={setUserName} />,
        },
        {
          path: "signup",
          element: <Signup onSignup={setIsAuth} setUserName={setUserName} />,
        },
        {
           path: "roadmap",
           element: <LearningRoadmap courses={freeCourses} /> 
        }, 
          {
          path: "bookmarks",
          element: <Bookmarks />,
        },
      ],
    },
  ]);

  return (
    <BookmarkProvider>
      <RouterProvider router={router} />
    </BookmarkProvider>
  );
}
