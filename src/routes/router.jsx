import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
        },
        {
            path: "/auth",
            element: <h2>Authentication</h2>,
        },
        {
            path: "/plants",
            element: <h2>Plants</h2>,
        },
        {
            path: "/*",
            element: <h2>404 Page not found</h2>,
        },

    ]
);

export default router;