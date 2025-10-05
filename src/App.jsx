import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <MainPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
