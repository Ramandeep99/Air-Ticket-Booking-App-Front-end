
import React from "react";
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

// icons
import Like from "./Components/Icons/Edit";

const Routing = () => {


        return (

            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/logout' component={Logout} />
                <Route exact path='/showflight' component={ShowFlight} />
                <Route exact path='/addflight' component={AddFlight} />
                <Route exact path='/editflight' component={EditFlight} />
                <Route exact path='/deleteflight' component={DeleteFlight} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route component={Error} />
            </Switch>
        )

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
}

const App = () => {

    return (
        <>

            <Navbar />
            <Routing />

        </>
    )
}


export default App;


