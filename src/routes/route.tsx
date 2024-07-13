import App from "@/App";
import DashboardLayout from "@/layouts/DashboardLayout";
import CheckOut from "@/pages/CheckOut";
import CategoryManagement from "@/pages/dashboard/CategoryManagment";
import ProductManagement from "@/pages/dashboard/ProductMangment";
import Home from "@/pages/Home";
import ProductDetails from "@/pages/ProductDetails";
import Products from "@/pages/Products";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product",
        element: <Products />,
      },
      {
        path: "product-details/:productId",
        element: <ProductDetails />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <CategoryManagement />,
      },

      {
        path: "product",
        element: <ProductManagement />,
      },
    ],
  },
]);

export default router;
