//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage";
import BlogsPage from "./Components/BlogsPage";
/* import "bootstrap/dist/js/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/dotn/bootstrap-icons.css"; */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import { Link, useNavigate, useParams } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/blogs",
    element: <BlogsPage />,
  },
  // {
  //   path: "/blogs/:categoryId?",
  //   element: <BlogsPage />,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
