import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSuperAdminVerifyPAswMutation, useVerifyForgotPasswordMutation } from '../../redux/services/userservice'
import { Skeleton } from 'antd'; 
function SuperadminVerify() {

    let { email, resetToken } = useParams()
    let [superAdminVerifyPAsw] = useSuperAdminVerifyPAswMutation()
    console.log({ userId, resetToken });
    const VerifyForgotPasw = async () => {
        try {
            const response = await superAdminVerifyPAsw({ email, resetToken }).unwrap();
            console.log(" verified successfully:", response);
        } catch (error) {
            console.error("Error verifying :", error);
        }
    }
    useEffect(() => {
        VerifyForgotPasw()
    }, [])

    return (

        <Skeleton active />

    )
}

export default SuperadminVerify 