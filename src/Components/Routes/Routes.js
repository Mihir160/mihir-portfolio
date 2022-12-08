import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
     
    }
])