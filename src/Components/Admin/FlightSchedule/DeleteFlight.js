import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

const DeleteFlight = ({ selectFlight }) => {

    console.log(selectFlight)

    const history = useHistory();

    const submit = async (e) => {

        const res = await fetch(`/admin/deleteflight/${selectFlight}`, {
            method: "GET"
        })

        const data = await res.json();

        console.log(data)

        if (res.status === 404) {
            window.alert('Invalid Request!')
        }
        else {
            window.alert('Successful Deleted!')
            history.push('/showflight');
        }

    }

    useEffect(()=>{
        submit()
    },[])

    return (
        <>

        </>
    )
}


export default DeleteFlight;