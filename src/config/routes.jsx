import { createBrowserRouter } from "react-router-dom";
import { Login, Task, UpdateProfile } from '../pages'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/Task',
        element: <Task />
    },
    {
        path: '/UpdateProfile',
        element: <UpdateProfile />
    }
])