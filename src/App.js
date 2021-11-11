
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from "./Components/Admin/Navbar";
import Login from "./Components/Admin/Login";
import Register from "./Components/Admin/Register";
import Error from "./Components/Admin/Error";
import Home from "./Components/Admin/Home";
import Logout from "./Components/Admin/Logout";

import ShowFlight from "./Components/Admin/FlightSchedule/ShowFlight";
import AddFlight from "./Components/Admin/FlightSchedule/AddFlight";
import EditFlight from "./Components/Admin/FlightSchedule/EditFlight";
import DeleteFlight from "./Components/Admin/FlightSchedule/DeleteFlight";


// user
import LoginUser from './Components/User/LoginUser'
import userHome from './Components/User/UserHome'
import RegisterUser from './Components/User/RegisterUser'
import BookTicket from "./Components/User/BookTicket";
import UserBookingHistory from './Components/User/UserBookingHistory'

const App = () => {

    const [selectFlight, setselectFlight] = useState('')

    function withProps(Component, props) {
        return function(matchProps) {
          return <Component {...props} {...matchProps} />
        }
      }

    return (
        <>
            
            <Navbar />
            {/* <Routing  /> */}

            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/logout' component={Logout} />
                <Route exact path='/showflight' component = {withProps(ShowFlight, { setselectFlight: setselectFlight })} />
                <Route exact path='/addflight' component={AddFlight} />
                <Route exact path='/editflight'  component={withProps(EditFlight, { selectFlight: selectFlight })} />
                <Route exact path='/deleteflight' component={withProps(DeleteFlight, { selectFlight: selectFlight })} />
                <Route exact path='/register' component={RegisterUser} />
                <Route exact path='/login' component={Login} />

                {/* user */}
                {/* <Route exact path='/registerUser' component={RegisterUser} /> */}
                <Route exact path='/loginUser' component={LoginUser} />
                <Route exact path='/userHome' component={userHome } />
                <Route exact path='/bookticket' component={BookTicket} /> 
                <Route exact path='/bookingHistory' component={UserBookingHistory} />
                <Route component={Error} />
            </Switch>

        </>
    )
}


export default App;





// const Routing = () => {

//     const [selectFlight, setselectFlight] = useState('')

//     return (

//         <Switch>
//             <Route exact path='/' component={Home} />
//             <Route exact path='/logout' component={Logout} />
//             <Route exact path='/showflight' component={ShowFlight} setselectFlight={setselectFlight} />
//             <Route exact path='/addflight' component={AddFlight} />
//             <Route exact path='/editflight' component={EditFlight} selectFlight={selectFlight} />
//             <Route exact path='/deleteflight' component={DeleteFlight} />
//             <Route exact path='/register' component={Register} />
//             <Route exact path='/login' component={Login} />
//             <Route component={Error} />
//         </Switch>
//     )



    // for making routing different at login and logout time
    // const status = localStorage.getItem('login')
    // // console.log(status)
    // if (status === "true") {
    //     return (

    //         <Switch>
    //             <Route exact path='/' component={Home} />
    //             <Route exact path='/logout' component={Logout} />
    //             <Route exact path='/showflight' component={ShowFlight} />
    //             <Route exact path='/addflight' component={AddFlight} />
    //             <Route component={Error} />
    //         </Switch>
    //     )
    // }
    // else {
    //     return (

    //         <Switch>
    //             <Route exact path='/register' component={Register} />
    //             <Route exact path='/login' component={Login} />
    //             <Route component={Error} />
    //         </Switch>
    //     )
    // }
// }
