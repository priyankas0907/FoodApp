import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();
  //authentication
  useEffect(() => {
    //Make API Call and send UserName and Password
    const data = {
      name: "Priyanka Sinha",
    };
    setUserInfo(data.name);
  }, []);
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
      <div className="app">
        <Header />
        <Outlet />
        //footer
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/cart", element: <Cart /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); //in place of AppLayout we pass RouterProvider
