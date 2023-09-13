import React from "react";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import { RouterProvider, createHashRouter } from "react-router-dom";

let routers = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "About", element: <About /> },
      { index: true, element: <Home /> },
      { path: "Portfolio", element: <Portfolio /> },
      { path: "Contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}
