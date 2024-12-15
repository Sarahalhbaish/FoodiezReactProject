import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Nav from "./Component/Nav";
import RegisterPage from "./Component/RegisterPage";
import Ingredient from "./Component/Ingredient";
import Home from "./Component/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Nav />
        <Home />
      </div>
    ),
  },
  {
    path: "/RegisterPage",
    element: (
      <div>
        <Nav />
        <RegisterPage />
      </div>
    ),
  },
  {
    path: "/Ingredient",
    element: (
      <div>
        <Nav />
        <Ingredient />
      </div>
    ),
  },
]);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
