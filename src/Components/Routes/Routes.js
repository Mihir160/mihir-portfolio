import { createBrowserRouter } from "react-router-dom";
import Blog from "../Home/Blog/Blog";
import Home from "../Home/Home/Home";
import ProjectsDetails from "../Home/ProjectsDetails/ProjectsDetails";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
     
    },
    
    {
        path:'projects/:id',
        element:<ProjectsDetails></ProjectsDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/projects/${params.id}`)
    },
    {
        path:'/blog',
        element:<Blog></Blog>
    }
])