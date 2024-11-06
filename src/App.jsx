import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import HomePage from './page/home-page/HomePage.component';
import ShopPage from "./page/shop-page/ShopPage";
import Layout from "./components/layout/layout";
import SignIn from "./page/sign-in/SignIn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "shop", element: <ShopPage /> },
            { path: "shop/:id", element: <ShopPage /> },
            { path: "sign-in", element: <SignIn /> }
        ]
    }
]);

function App() {

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
