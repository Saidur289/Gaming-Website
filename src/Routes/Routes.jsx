import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import AddReview from "../pages/AddReview";
import AllReview from "../pages/AllReview";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./priveate/PrivateRoute";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/addReview',
            element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
        },
        {
            path: '/allReview',
            element: <AllReview></AllReview>
        },
        {
          path: 'login',
          element: <Login></Login>,
        },
        {
          path: 'register',
          element: <Register></Register>,
        }
      ]
    },
  ]);
  export default router