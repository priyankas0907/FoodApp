import React from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      //footer
    </div>
  );
};

const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayout />, errorElement: <Error /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); //in place of AppLayout we pass RouterProvider
