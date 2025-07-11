import AdminLayout from "../layout/admin/AdminLayout"
import UserLayout from "../layout/user/UserLayout"
import Dashboard from "../pages/Admin/Dashboard"
import Orders from "../pages/Admin/Orders"
import Products from "../pages/Admin/Products"
import Stores from "../pages/Admin/Stores"
import Suppliers from "../pages/Admin/Suppliers"
import Users from "../pages/Admin/Users"
import Home from "../pages/User/Home"
import PrivateRoute from "../components/PrivateRoute"
import LoginSendOtpEmail from "../pages/Auth/2FA/LoginSendOtpEmail"
import LoginSendOtpPhone from "../pages/Auth/2FA/LoginSendOtpPhone"
import LoginVerifyEmailOtp from "../pages/Auth/2FA/LoginVerifyOtpEmail"
import TwoFAMethodLogin from "../pages/Auth/2FA/TwoFAMethodLogin"
import VerifyPhoneOtp from "../pages/Auth/2FA/VerifyPhoneOtp"
import Confirm from "../pages/Auth/Confirm"
import ForgotPassword from "../pages/Auth/ForgotPassword"
import Login from "../pages/Auth/Login"
import Register from "../pages/Auth/Register"
import Error404 from "../pages/ErrorPage"
import UserProfile from "../pages/User/UserProfile"
import SuperadminVerify from "../pages/Auth/superadminverify"

const Routes = [
    {
        path: '/',
        element: <UserLayout />,
        children: [
            { path: "", element: <Home /> },
            {
                path: "user-profile",
                element: <UserProfile />
            }
        ]
    }
    ,

    {
        path: "dashboard",
        element: <PrivateRoute allowedRoles={["admin", "manage"]} />,
        children: [
            {
                path: "",
                element: <AdminLayout />,
                children: [
                    { path: "", element: <Dashboard /> },
                    { path: "müşteriler", element: <Orders /> },
                    { path: "rezervasiyalar", element: <Products /> },
                    { path: "xidmetler", element: <Stores /> },
                    { path: "otaqlar", element: <Suppliers /> },
                    { path: "istifadeçiler", element: <Users /> },
                ],
            },
        ],
    },
    {
        path: "/",
        element: <UserLayout />,
        children: [
            { path: "", element: <Home /> },

        ]

    }
    },
     {
        path: "*",
        element: <Error404 />,
    },
    // AUTH
    { path: '/register', element: <Register /> },
    { path: '/login', element: <Login /> },
    { path: "confirm-email/:userId/:token", element: <Confirm /> },
    { path: "confirm-email-superadmin/:email/:token", element: <SuperadminVerify /> },
    { path: "forgot-password", element: <ForgotPassword /> },
    { path: "2fa-method-login", element: <TwoFAMethodLogin /> },
    { path: "2fa-verify-otp-email", element: <LoginVerifyEmailOtp /> },
    { path: "2fa-send-otp-email", element: <LoginSendOtpEmail /> },
    { path: "2fa-send-otp-phone", element: <LoginSendOtpPhone /> },
    { path: "2fa-verify-otp-phone", element: <VerifyPhoneOtp /> },
   
]

export default Routes