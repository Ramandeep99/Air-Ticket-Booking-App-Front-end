import React, { useEffect, useState, useContext } from "react";
// import './css/FlightSchedule.css'
import { Link, useHistory } from "react-router-dom";
import Like from './Icons/Edit.js'
import Delete from "./Icons/Delete";
import './css/ShowFlight.css'
import FlightIcon from "./Icons/FlightIcon.js";
import PaymentIcon from "./Icons/PaymentIcon.js";


// from user 
import { Context } from "../../../GlobalFlightState/FlightContext";

const ShowFlight = ({ setselectFlight }) => {

    const history = useHistory();

    const { globalState, globalSetState } = useContext(Context);

    const [state, setstate] = useState([])

    const submit = async () => {

        const res = await fetch('/admin/getflight')

        const data = await res.json()

        setstate(data);
    }

    useEffect(() => {
        submit()
    }, [])

    const onHandle = async (mode) => {
        console.log(mode)
        setselectFlight(mode)

    }

    const onHandleDelete = async (mode) => {
        // console.log(mode)
        // setselectFlight(mode)
        if (window.confirm("Are you sure?")) {
            window.alert("OK clicked");
            setselectFlight(mode)
            history.push('/deleteflight')
        }
        else {
            window.alert("Cancel clicked");
        }

        // const res = await fetch(`/admin/deleteflight/${mode}`, {
        //     method: "GET"
        // })

        // const data = await res.json();

        // console.log(data)

        // if (res.status === 404) {
        //     window.alert('Invalid Request!')
        // }
        // else {
        //     window.alert('Successful Deleted!')
        //     // history.push('/showflight');
        // }

    }

    const UseronHandle = (mode) => {
        // console.log(mode)
        globalSetState(mode)
    }

    const admin = localStorage.getItem('admin')

    if (admin === 'true') {
        return (
            <>
                <div className="container">
                    {/* <div className='text-center m-5'> <Clock /> </div> */}
                    <h2 className='text-center m-5'> Flight Schedule </h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">FLIGHT</th>
                                <th scope="col">FROM</th>
                                <th scope="col">TO</th>
                                <th scope="col">DATE</th>
                                <th scope="col">TAKEOFF TIME</th>
                                <th scope="col"> DURATION </th>
                                <th scope="col">FARE</th>

                                <th scope="col"> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.map((flight, index) => (
                                <tr data-index={index}>
                                    <td>{flight.FlightNo}</td>
                                    <td>{flight.From}</td>
                                    <td>{flight.To}</td>
                                    <td>{flight.Date_}</td>
                                    <td>{flight.TakeOff_Time}</td>
                                    <td>{flight.Duration}</td>
                                    <td>{flight.Fare}</td>

                                    <td>
                                        <div className='text-center'>
                                            <Link onClick={() => onHandle(flight._id)} className="btn btn-primary btn-sm" to='/editflight'  > <Like /> </Link>
                                            <button onClick={() => onHandleDelete(flight._id)} className=" btn btn-danger btn-sm ms-2" > <Delete /> </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                    <div className='text-center mt-4'>
                        <Link className=" btn btn-primary" to='/addflight'>Add Flight </Link>
                    </div>
                </div>

            </>
        )
    }
    else {
        return (
            <>
                <div className="container">
                    <h2 className='text-center m-4 mb-5'> FLIGHT SCHEDULE </h2>
                    <div class="row">
                        {state.map((flight, index) => (
                            <div class="col-sm-6 mb-4">
                                <div class="card">
                                    <div class="p-4 bg-top">
                                        <div class="d-flex flex-row justify-content-between">
                                            <div class="d-flex flex-column justify-content-between align-items-center">
                                                <h1>IND</h1><span class="mb-2">{flight.From}</span><span>{flight.Date_}</span><span>{flight.TakeOff_Time}</span>
                                            </div>
                                            <div class="d-flex flex-column justify-content-center "> <span>{flight.FlightNo}</span>  <FlightIcon size={70} /> <span>{flight.Duration} mins</span>  </div>
                                            <div class="d-flex flex-column justify-content-between align-items-center">
                                                <h1>CDG</h1><span class="mb-2">{flight.To}</span><span>{flight.Date_}</span><span>{flight.TakeOff_Time}</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="d-flex flex-row justify-content-center bg-btm">
                                        <div class="d-flex flex-row align-items-center mx-3">
                                            <h3 className='mx-5 text-light'>{flight.Fare}</h3>
                                            <div className=' d-flex flex-row '>
                                                <Link className=" btn btn-secondary mx-5 btn-sm" to='/bookticket'><h5> PAY </h5></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            /* <div class="col-sm-6">
                                <div class="card">
                                    <div class="p-4 bg-top">
                                        <div class="d-flex flex-row justify-content-between">
                                            <div class="d-flex flex-column justify-content-between align-items-center">
                                                <h1>IND</h1><span class="mb-2">Indianapolis</span><span>Thu, Aug 17</span><span>07:00 PM</span>
                                            </div>
                                            <div class="d-flex flex-column justify-content-center"> <FlightIcon size={70} /> </div>
                                            <div class="d-flex flex-column justify-content-between align-items-center">
                                                <h1>CDG</h1><span class="mb-2">Paris</span><span>Thu, Aug 17</span><span>03:00 AM</span>
                                            </div>
                                        </div>
    
                                    </div>
                                    <div class="d-flex flex-row justify-content-center bg-btm">
                                        <div class="d-flex flex-row align-items-center mx-3">
                                            <h3 className='mx-5 text-light'>$500</h3>
                                            <div className=' d-flex flex-row '>
                                                <Link className=" btn btn-dark mx-5 btn-sm" to='/bookticket'> <PaymentIcon /> </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */
                        ))}
                    </div>
                </div>

                {/* <div className="container">
                   
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">FLIGHT</th>
                                <th scope="col">FROM</th>
                                <th scope="col">TO</th>
                                <th scope="col">DATE</th>
                                <th scope="col">TAKEOFF TIME</th>
                                <th scope="col"> DURATION </th>
                                <th scope="col">FARE</th>

                            </tr>
                        </thead>
                        <tbody>
                            {state.map((flight, index) => (
                                <tr data-index={index}>
                                    <td>{flight.FlightNo}</td>
                                    <td>{flight.From}</td>
                                    <td>{flight.To}</td>
                                    <td>{flight.Date_}</td>
                                    <td>{flight.TakeOff_Time}</td>
                                    <td>{flight.Duration}</td>
                                    <td>{flight.Fare}</td>

                                    <td>
                                        <div className='text-center'>
                                            <Link onClick={() => UseronHandle(flight._id)} className=" btn btn-primary btn-sm" to='/bookticket'  > <Like /> </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                </div>
 */}

            </>
        )
    }
}

export default ShowFlight;





// digital clock using reack hooks and javascript setinterval
// const App = () => {

//     var currentdate = new Date();
//     var datetime = currentdate.toLocaleTimeString()

//     const [count, setCount] = useState(datetime);

//     const IncVal = () => {

//         var currentdate = new Date();
//         var currentDateTime = currentdate.toLocaleTimeString();
//         setCount(currentDateTime);
//         console.log('clicked')
//     }

//     setInterval(IncVal , 1000);

//     return (
//         <>
//             <div className='mainDiv'>
//                 <h1> {count} </h1>
//             </div>
//         </>
//     )
// }


// export default App



// to get current date time on clicking a button as well as refreshing the tab
// const App = () => {

//     var currentdate = new Date();
//     // var datetime = currentdate.getDay() + "-" + currentdate.getMonth()
//     //     + "-" + currentdate.getFullYear() + " @ "
//     //     + currentdate.getHours() + ":"
//     //     + currentdate.getMinutes() + ":" + currentdate.getSeconds();
//     var datetime = currentdate.toLocaleTimeString()

//     const [count, setCount] = useState(datetime);

//     const IncVal = () => {

//         var currentdate = new Date();
//         var currentDateTime = currentdate.getDay() + "-" + currentdate.getMonth()
//             + "-" + currentdate.getFullYear() + " @ "
//             + currentdate.getHours() + ":"
//             + currentdate.getMinutes() + ":" + currentdate.getSeconds();

//         setCount(currentDateTime);
//         console.log('clicked')
//     }

//     return (
//         <>
//             <div className='mainDiv'>
//                 <h1> {count} </h1>
//                 <button onClick={IncVal}> Click Me </button>
//             </div>
//         </>
//     )
// }


// export default App

