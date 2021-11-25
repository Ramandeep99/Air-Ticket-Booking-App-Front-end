
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { UserContext } from "../../UserGlobalState/UserContext";
import { useHistory } from "react-router";


const Navbar = () => {

    const history = useHistory();

    const { globalState2, globalSetState2 } = useContext(UserContext);

    console.log(globalState2)

    const [bookingdata, setbookingdata] = useState({});

    const [username, setuserName] = useState('')

    const admin = localStorage.getItem('admin')

    const user = localStorage.getItem('login')

    const Id = localStorage.getItem('loginId')

    console.log(Id)

    const userName = async () => {
        const res = await fetch(`/user/userName/${Id}`)

        const data = await res.json()
        var name = data.user
        var letter = name.charAt(0).toUpperCase();
        letter += name.slice(1, name.length);
        setuserName(letter)
        console.log(letter)
    }

    useEffect(() => {
        userName()
        // console.log(username)
    }, [])


    const showBookingHistory = async () => {
        setbookingdata(globalState2)
        history.push({
            pathname: '/bookingHistory',
            state: { data: bookingdata }
        });

    }


    const Menu = () => {
        if (admin === "true") {
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
        else if (user === 'true') {
            return (
                <>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to='/userHome'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to='/userHome'>Welcome, {username}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to='/showflight'  > Show Flights </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link active" to='/bookingHistory'  > Booking History </Link>

                    </li> */}

                    <button className=" btn-dark" type="button" onClick={showBookingHistory}
                        id="bookingHistory" style={{ textAlign: 'center', borderBlockStyle: 'none' }} >Your Bookings</button>

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