import AdminLayout from "../layout/admin/AdminLayout"
import UserLayout from "../layout/user/UserLayout"
import Dashboard from "../pages/Admin/Dashboard"
import Orders from "../pages/Admin/Orders"
import Products from "../pages/Admin/Products"
import Stores from "../pages/Admin/Stores"
import Suppliers from "../pages/Admin/Suppliers"
import Users from "../pages/Admin/Users"
import Home from "../pages/User/Home"
const Routes = [
        {
        path:"admin",
        element:<AdminLayout/>,
        children:[
            {path:"",element:<Dashboard/>},
            {path:"orders",element:<Orders/>},
            {path:"products",element:<Products/>},
            {path:"stores",element:<Stores/>},
            {path:"suppliers",element:<Suppliers/>},
            {path:"users",element:<Users/>}
        ]
    },
    {
        path:"/",
        element:<UserLayout/>,
        children:[
            {path:"",element:<Home/>},
            
        ]
    }
]

export default Routes