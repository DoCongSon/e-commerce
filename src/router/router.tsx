import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.tsx";
import DefaultLayout from "../layouts/DefaultLayout.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout>
            <Home/>
        </DefaultLayout>
    }
]);

export default router