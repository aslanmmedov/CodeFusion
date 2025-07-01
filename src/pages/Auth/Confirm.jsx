import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useConfirmEmailMutation } from '../../redux/services/userservice';

function Confirm() {
    const { userId, token } = useParams()
    const [confirmEmail] = useConfirmEmailMutation()
    let navigate = useNavigate()
    const handleConfirmEmail = async () => {
        try {
             await confirmEmail({ userId, token });
            console.log("Email confirmed successfully:");
             navigate('/login')

        } catch (error) {
            console.error("Error confirming email:", error);
            
        }
    }
    useEffect(()=>{
        handleConfirmEmail()
    },[userId,token])
    console.log(userId, token);
    return (
        <div>

        </div>
    )
}

export default Confirm