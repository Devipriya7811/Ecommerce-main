import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Shop from "./Pages/Shop";
import Root from "./Components/roots/root";
import Men from "./Pages/men";
import Womens from "./Pages/Womens";
import Kid from "./Pages/Kid";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import Sign from "./Pages/sign";
import { UserProvider } from "../src/Components/Context.jsx";
// import fire from "./config/fire";
// import product from './Components/Assets/all_product'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "men",
        element: <Men />,
      },
      {
        path: "women",
        element: <Womens />,
      },
      {
        path: "kids",
        element: <Kid />,
      },
      {
        path: "login",
        // element: <Login />,
        element: <Sign />,
      },
      {
        path: "signup",
        element: <Login />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "sign",
        element: <Sign />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <UserProvider>
        <RouterProvider router={router}></RouterProvider>
      </UserProvider>
      <Footer />
    </div>
  );
}

export default App;
