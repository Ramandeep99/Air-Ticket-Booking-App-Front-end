
// import React, { useContext, useEffect, useState } from 'react';
// import { useHistory ,NavLink } from 'react-router-dom';
// import './css/register.css'
// import { Context } from '../../reducer/context';

// const LogoutUser = () => {

//     // const {globalDispatch} = useContext(Context);
//     const {globalState, globalSetState} = useContext(Context);
    
//     const history = useHistory();

//     const logout = async () => {
//         const res = await fetch("/user/logout")
//         if (res.status === 200) {
//             const data = await res.json()
//             // globalDispatch({type : "LOGOUT"})
//             localStorage.setItem('login' , false);
//             globalSetState(localStorage.getItem('login'))
//             console.log("logout")
//             history.push('/loginuser')
//         }
//         else {
//             console.log(res.error)
//         }
//     }

//     useEffect(() =>{
//         logout();
//     })

//     return (
//         <>

//         </>
//     )
// }


// export default LogoutUser;


