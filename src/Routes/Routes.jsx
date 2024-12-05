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
import ReviewDetails from "../pages/ReviewDetails";
import MyReview from "../pages/MyReview";
import UpdateReview from "../pages/UpdateReview";
import MyWatchList from "../pages/MyWatchList";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <div>404 | Page Not Found</div>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/reviews'),
        },
        {
            path: '/addReview',
            element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
        },
        {
            path: '/allReview',
            element: <AllReview></AllReview>,
            loader: () => fetch('http://localhost:5000/allReviews')
            
        },
        {
          path: 'login',
          element: <Login></Login>,
        },
        {
          path: 'register',
          element: <Register></Register>,
        },
        {
          path: '/review/:id',
          element:<PrivateRoute><ReviewDetails></ReviewDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/review/${params.id}`)
        },
        {
          path: 'myReview',
          element: <PrivateRoute><MyReview></MyReview></PrivateRoute>,
        },
        {
          path: '/updateReview/:id',
          element: <UpdateReview></UpdateReview>,
          loader: ({params}) => fetch(`http://localhost:5000/allReviews/${params.id}`)
        },
        {
          path: '/addWatchList',
          element: <PrivateRoute><MyWatchList></MyWatchList></PrivateRoute>,
        }
      ]
    },
  ]);
  export default router