import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { CarrinhoPage } from "../pages/Carrinho";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/carrinho",
        element: <CarrinhoPage />,
    },
]);
