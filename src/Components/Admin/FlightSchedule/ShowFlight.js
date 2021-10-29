import React, { useEffect, useState } from "react";
import "./FlightSchedule.css"
import { Link } from "react-router-dom";

const Clock = () => {

    var currentdate = new Date();
    var datetime = currentdate.toLocaleTimeString()

    const [count, setCount] = useState(datetime);

    const IncVal = () => {

        var currentdate = new Date();
        var currentDateTime = currentdate.toLocaleTimeString();
        // console.log(currentDateTime)
        setCount(currentDateTime);
    }

    setInterval(IncVal , 1000);

    return (
        <>
            <div className='mainDiv'>
                <h1> {count} </h1>
            </div>
        </>
    )
}

const ShowFlight = () => {

    const [state, setstate] = useState([])

    const submit = async () => {

        const res = await fetch('/admin/getflight')

        const data = await res.json()
        setstate(data);

    }

    useEffect(() => {
        submit()
    })


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

