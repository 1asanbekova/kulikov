import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import EditPage from "../pages/EditPage";
import { useAuth } from "../contexts/AuthContextProvider";
import { ADD } from "../helpers/consts";
import UrlAdminPage from "../pages/UrlAdminPage";
import DetailsPage from "../pages/DetailsPage";
import EditUrlPage from "../pages/EditUrlPage";
import AboutUsPage from "../pages/AboutUsPage";
import CartPage from "../pages/CartPage";
import KulikovPage from "../pages/KulikovPage";
import WishPage from "../pages/WishPage";

const MainRoutes = () => {
  const { user } = useAuth();

  const PUBLIC_ROUTES = [
    { link: "/auth", element: <AuthPage />, id: 1 },
    { link: "/", element: <HomePage />, id: 2 },
    { link: "/products", element: <ProductsPage />, id: 3 },
    { link: "/details/:id", element: <DetailsPage />, id: 4 },
    { link: "*", element: <h1>NOT FOUND</h1>, id: 5 },
    { link: "/about", element: <AboutUsPage />, id: 10 },
    { link: "/cart", element: <CartPage />, id: 11 },
    { link: "/rabota", element: <KulikovPage />, id: 12 },
    { link: "/wish", element: <WishPage />, id: 13 },
  ];

  const PRIVATE_ROUTES = [
    { id: 6, link: "/products/:id", element: <EditPage /> },
    { id: 7, link: "/products2/:id", element: <EditUrlPage /> },
    { id: 8, link: "/admin", element: <AdminPage /> },
    { id: 9, link: "/admin2", element: <UrlAdminPage /> },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}

        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                key={item.id}
                path={item.link}
                element={
                  user.email === ADD ? (
                    item.element
                  ) : (
                    <Navigate replace to="/*" />
                  )
                }
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
