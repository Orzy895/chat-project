import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
     const {setAuthUser} =  useAuthContext()

    const signup = async ({fullName, username, password, confirmPassword, gender}) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
        if (!success) return;
        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
            })

            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            localStorage.setItem("user-info", JSON.stringify(data));
            setAuthUser(data);
            
            alert("Succesfully signed up")
        } catch (error) {
            alert("Error during signup")
        }
        finally {
            setLoading(false);
        }
    }
    return{loading, signup};
}

export default useSignup

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        alert("Please fill in all fields")
        return false;
    }
    else if (password != confirmPassword) {
        alert("Passwords do not match")
        return false;
    }
    else if (password.length < 8) {
        alert("Passwords must be over 8 digits")
        return false;
    }
    return true;
}