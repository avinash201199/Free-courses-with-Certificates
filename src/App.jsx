import { Link, BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
// function App() {

//   return (
//     <>
//       <TitleTop />
//       <Nav toggleSideMenu={toggleSideMenu} setQuery={setQuery} />
//       <Main query={query} />
//       <SideMenu active={active} toggleSideMenu={toggleSideMenu} />
//     </>
//   );
// }

// export default App;
// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Dashboard />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import Main from "./components/main";
import ErrorPage from "./components/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        element: <Main />,
        index: true,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
