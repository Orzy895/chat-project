import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'

const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const login = async (username, password) => {
        const success = handleInputErrors(username, password);
        if (!success) return;
        setLoading(true);
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            })
            const data = await res.json();
            if (data.error) {
                console.log("data error");
                throw new Error(data.error);
            }
            console.log(data);
            localStorage.setItem("user-info", JSON.stringify(data))
            setAuthUser(data);
            alert("Succesfully logged in")
        } catch (error) {
            alert(error.message)
        }
        finally {
            setLoading(false);
        }
    }
    return { loading, login };
}

export default useLogin

function handleInputErrors(username, password) {
    if (!username || !password) {
        alert("Please fill in all fields")
        return false;
    }
    return true;
}