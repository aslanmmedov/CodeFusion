import AdminLayout from "../layout/admin/AdminLayout"
import Dashboard from "../pages/Admin/Dashboard"
import Orders from "../pages/Admin/Orders"
import Products from "../pages/Admin/Products"
import Stores from "../pages/Admin/Stores"
import Suppliers from "../pages/Admin/Suppliers"
import Users from "../pages/Admin/Users"
const Routes = [
        {
        path:"dashboard",
        element:<AdminLayout/>,
        children:[
            {path:"",element:<Dashboard/>},
            {path:"müşteriler",element:<Orders/>},
            {path:"rezervasiyalar",element:<Products/>},
            {path:"xidmetler",element:<Stores/>},
            {path:"otaqlar",element:<Suppliers/>},
            {path:"istifadeçiler",element:<Users/>}
        ]
    }
]

export default Routes