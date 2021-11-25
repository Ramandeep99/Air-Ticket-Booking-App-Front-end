
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import './css/register.css'
import { Context } from '../../reducer/context';
import { UserContext } from '../../UserGlobalState/UserContext';

const Logout = () => {

    // const {globalDispatch} = useContext(Context);
    const { globalState, globalSetState } = useContext(Context);
    const { globalState2, globalSetState2 } = useContext(UserContext);

    const history = useHistory();

    const logout = async () => {
        console.log(localStorage.getItem('admin'))
        if (localStorage.getItem('admin') === "true") {
            const res = await fetch("/admin/logout")
            if (res.status === 200) {
                const data = await res.json()

                localStorage.setItem('admin', false);
                globalSetState(localStorage.getItem('admin'))
                console.log("logout")
                history.push('/loginUser')
            }
            else {
                console.log(res.error)
            }
        }
        else {
            console.log(1000)
            const res = await fetch("/user/logout")
            if (res.status === 200) {
                const data = await res.json()

                localStorage.setItem('login', false);
                localStorage.setItem('loginId', null);
                globalSetState(localStorage.getItem('login'))
                globalSetState2(localStorage.getItem('loginId'))
                console.log("logout")
                history.push('/loginUser')
            }
            else {
                console.log(res.error)
            }
        }

    }

    useEffect(() => {
        logout();
    },[])

    return (
        <>

        </>
    )
}


export default Logout;