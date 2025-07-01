import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useConfirmEmailMutation } from '../../Redux/services/Userservice';

function Confirm() {
    const { userId, token } = useParams()
    const [confirmEmail] = useConfirmEmailMutation()
    let navigate = useNavigate()
    const handleConfirmEmail = async () => {
        try {
            const response = await confirmEmail({ userId, token }).unwrap();
            console.log("Email confirmed successfully:", response);
             navigate('/login')

        } catch (error) {
            console.error("Error confirming email:", error);
            
        }
    }
    useEffect(()=>{
        handleConfirmEmail()
    },[])
    console.log(userId, token);
    return (
        <div>

        </div>
    )
}

export default Confirm