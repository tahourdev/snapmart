import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

//Page
import { Header, Footer } from "./components";
import { Home, Products, Search, ProductDetails } from "./pages";
import { SkeletonTheme } from "react-loading-skeleton";
import useFetch from "./hooks/useFetch";

//Components

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products/:id", element: <Products /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/search", element: <Search /> },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <RouterProvider router={router} />
      </SkeletonTheme>
    </div>
  );
};

export default App;
