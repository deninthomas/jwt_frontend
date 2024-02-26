import { RegisterPage } from "../pages/register";
import { DefaultFallback } from "../pages/Fallbacks";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultFallback />,
      errorElement: <h2>This is my error boundry</h2>,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {},
  ]);

  return <RouterProvider router={router} />;
}
