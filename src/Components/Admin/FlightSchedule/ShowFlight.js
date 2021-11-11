import React, { useEffect, useState , useContext } from "react";
import './css/FlightSchedule.css'
import { Link } from "react-router-dom";
import Like from './Icons/Edit.js'
import Delete from "./Icons/Delete";

// from user 
import { Context } from "../../../GlobalFlightState/FlightContext";

const ShowFlight = ({ setselectFlight }) => {

    const {globalState , globalSetState} = useContext(Context);

    const [state, setstate] = useState([])

    const submit = async () => {

        const res = await fetch('/admin/getflight')

        const data = await res.json()

        setstate(data);
    }

    useEffect(() => {
        submit()
    }, [])

    const onHandle = (mode) => {
        console.log(mode)
        setselectFlight(mode)
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
                                <th scope="col">TIME</th>
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
                                    <td>{flight.Time}</td>
                                    <td>{flight.Fare}</td>

                                    <td>
                                        <div className='text-center'>
                                            <Link onClick={() => onHandle(flight._id)} className=" btn btn-primary btn-sm" to='/editflight'  > <Like /> </Link>
                                            <Link onClick={() => onHandle(flight._id)} className=" btn btn-danger btn-sm ms-2" to='/deleteflight'> <Delete /> </Link>
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
                    {/* <div className='text-center m-5'> <Clock /> </div> */}
                    <h2 className='text-center m-5'> Flight Schedule </h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">FLIGHT</th>
                                <th scope="col">FROM</th>
                                <th scope="col">TO</th>
                                <th scope="col">DATE</th>
                                <th scope="col">TIME</th>
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
                                    <td>{flight.Time}</td>
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

