import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Regsiter from "../pages/Regsiter/Regsiter";
import News from "../pages/News/News";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader:()=>fetch('news.json')
            },
            {
                path:'/news/:id',
                element:<News></News>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Regsiter></Regsiter>
            }
        ]
    }
])

export default router;