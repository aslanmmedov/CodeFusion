import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useVerifyForgotPasswordMutation } from '../../Redux/services/Userservice'
import { Skeleton } from 'antd';
function VerifyForgotPassword() {

    let { userId, resetToken } = useParams()
    let [verifyForgotPassword] = useVerifyForgotPasswordMutation()
    console.log({ userId, resetToken });
    const VerifyForgotPasw = async () => {
        try {
            const response = await verifyForgotPassword({ userId, resetToken }).unwrap();
            console.log("Forgot password verified successfully:", response);
        } catch (error) {
            console.error("Error verifying forgot password:", error);
        }
    }
    useEffect(() => {
        VerifyForgotPasw()
    }, [])

    return (

        <Skeleton active />

    )
}

export default VerifyForgotPassword 