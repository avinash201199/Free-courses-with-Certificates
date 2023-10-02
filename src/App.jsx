import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import Main from "./components/main";
import Login from "./components/Login";
import Register from "./components/Register";
import RequireAuth from "./components/Requireauth";
import ErrorPage from "./components/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
      {
        path: "about",
        element: (
          <RequireAuth>
            <AboutPage />
          </RequireAuth>
        ),
      },
      {
        element: (
          <RequireAuth>
            <Main />
          </RequireAuth>
        ),
        index: true,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
