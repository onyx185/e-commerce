import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import HomePage from './page/home-page/HomePage.component';
import ShopPage from "./page/shop-page/ShopPage";
import Layout from "./components/layout/layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            { path: "", element: <HomePage /> },
            { path: "shop", element: <ShopPage /> },
            { path: "shop/:title", element: <div>Shop placeholder</div>},
            { path: "sign-in", element: <div>Sign up</div>}
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
