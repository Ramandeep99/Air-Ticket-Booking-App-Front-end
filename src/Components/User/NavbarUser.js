
import React, { useContext , useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Context } from "../../reducer/context";


const Navbar = () => {

    const {globalState, globalSetState} = useContext(Context);

    const status = localStorage.getItem('login')

    // console.log(status)

    const Menu = () => {
        if (status === "true" ) {
            return (
                <>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to='/showflight'  > Show Flights </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to='/logout'  >Logout </Link>
                    </li>
                    
                </>
            )
        }
        else {
            return (
            <>
                <li className="nav-item">
                    <Link className="nav-link" to='/loginUser' >Login </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/register' >Signup</Link>
                </li>
            </>
            )
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-2" to='#' >LOGO</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto me-4">
                            <Menu />
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;
















// import React from "react";
// import 'bootstrap/dist/css/bootstrap.css';

// const Navbar = () => {
//     return (
//         <>
//             <nav class="navbar navbar-expand-md navbar-light bg-light">
//                 <div class="container-fluid">
//                     <a class="navbar-brand" >LOGO</a>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
//                             <li class="nav-item">
//                                 <a class="nav-link active" aria-current="page">Home</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link">Login</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" >Signup</a>
//                             </li>                
//                         </ul>   
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Navbar;