import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Like from "../Admin/FlightSchedule/Icons/Edit";

import { Context } from "../../GlobalFlightState/FlightContext";

const ShowSearchedFlight = ({ flights }) => {

    const { globalState, globalSetState } = useContext(Context);

    // console.log(flights)

    const onHandle = (mode) => {
        globalSetState(mode)
    }

    return (
        <>
            <div className="container">
                <h2 className='text-center m-5'> Your Search Result </h2>
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
                        {flights.map((flight, index) => (
                            <tr data-index={index}>
                                <td>{flight.FlightNo}</td>
                                <td>{flight.From}</td>
                                <td>{flight.To}</td>
                                <td>{flight.Date_}</td>
                                <td>{flight.Time}</td>
                                <td>{flight.Fare}</td>
                                <td>
                                    <div className='text-center'>
                                        <Link onClick={() => onHandle(flight._id)} className=" btn btn-primary btn-sm" to='/bookticket'  > <Like /> </Link>
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

export default ShowSearchedFlight;




