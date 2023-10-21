import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  About,
  Home,
  Contact,
  Payment,
  RoomDetails,
  RoomPage,
  Landing,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/payment",
      //   element: <Payment />,
      // },
      {
        path: "/room/:id",
        element: <RoomDetails />,
      },
      {
        path: "/roompage",
        element: <RoomPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
