import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment";
import ContactUs from "../Pages/ContactUs/ContactUs";
import DashBoard from "../Pages/Dashboard/DashBoard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login&Register/Login/Login";
import Registration from "../Pages/Login&Register/Register/Registration";
import Reviews from "../Pages/Reviews/Reviews";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "reviews",
        element: <Reviews></Reviews>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashBoard></DashBoard>,
  },
]);
