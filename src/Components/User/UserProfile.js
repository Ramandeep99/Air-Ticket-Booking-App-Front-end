
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const UserProfile = () => {

    const [state, setuserName] = useState({ Name: "", Email: "" })

    const Id = localStorage.getItem('loginId')

    const userName = async () => {
        const res = await fetch(`/user/userName/${Id}`)

        const data = await res.json()

        setuserName({ Name: data.Name, Email: data.Email })
    }

    useEffect(() => {
        userName()
    }, [])


    return (
        <>
            <div className="container mt-4 text-center">
                <h1> {state.Name}</h1>
                <h1> {state.Email}</h1>
            </div>
        </>
    )
}

export default UserProfile;



