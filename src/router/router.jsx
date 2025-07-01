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

const Routes = [
    // AUTH
    { path: '/register', element: <Register /> },
    { path: '/login', element: <Login /> },
    { path: "confirm-email/:userId/:token", element: <Confirm /> },
    { path: "forgot-password", element: <ForgotPassword /> },
    { path: "2fa-method-login", element: <TwoFAMethodLogin /> },
    { path: "2fa-verify-otp-email", element: <LoginVerifyEmailOtp /> },
    { path: "2fa-send-otp-email", element: <LoginSendOtpEmail /> },
    { path: "2fa-send-otp-phone", element: <LoginSendOtpPhone /> },
    { path: "2fa-verify-otp-phone", element: <VerifyPhoneOtp /> },
    // { path: "*", element: <Error404 /> }
]

export default Routes