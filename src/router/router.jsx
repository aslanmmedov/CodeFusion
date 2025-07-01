import UserLayout from "../layout/user/UserLayout"
import Home from "../pages/User/Home"

const Routes = [
    {
        path:"/",
        element:<UserLayout/>,
        children:[
            {path:"",element:<Home/>},
            // {path:"orders",element:<Orders/>},
            // {path:"products",element:<Products/>},
            // {path:"stores",element:<Stores/>},
            // {path:"suppliers",element:<Suppliers/>},
            // {path:"users",element:<Users/>}
        ]
    }
]

export default Routes