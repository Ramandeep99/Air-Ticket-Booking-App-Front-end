import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const BookingHistory = ({ props }) => {

    const location = useLocation();

    const [upcomingFlights, setupcomingFlights] = useState([]);

    const [pastFlights, setpastFlights] = useState([]);

    const [present, setpresent] = useState("true");


    const findDetail = async () => {

        const res = await fetch(`/user/bookingDetail/${location.state.data}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })

        const data = await res.json();

        console.log(data)

        if (res.status === 400) {
        }
        else {
            setpastFlights(data.pastFlights);
            setupcomingFlights(data.upcomingFlights)
        }
    }

    useEffect(() => {
        findDetail()
    }, [])


    const showPrevBooking = () => {
        setpresent("false")
    }

    const showUpcomingBooking = () => {
        setpresent("true")
    }

    if (present === "true") {

        return (

            <>
                <div className="container">
                    <h2 className='text-center m-5'> Active Bookings </h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">FLIGHT</th>
                                <th scope="col">FROM</th>
                                <th scope="col">TO</th>
                                <th scope="col">DATE</th>
                                <th scope="col">TAKEOFF TIME</th>
                                <th scope="col">DURATION</th>
                                <th scope="col">FARE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {upcomingFlights.map((flight, index) => (
                                <tr data-index={index}>
                                    <td>{flight.FlightNo}</td>
                                    <td>{flight.From}</td>
                                    <td>{flight.To}</td>
                                    <td>{flight.Date_}</td>
                                    <td>{flight.TakeOff_Time}</td>
                                    <td>{flight.Duration}</td>
                                    <td>{flight.Fare}</td>

                                </tr>
                            ))}

                        </tbody>
                    </table>
                    <div className='text-center mt-4'>
                        <button className="btn btn-primary btn-block" type="submit" onClick={showPrevBooking}
                            id="prevBooking"  >Previous Booking</button>
                    </div>
                </div>


            </>
        )
    }
    else {
        return (

            <>
                <div className="container">
                    <h2 className='text-center m-5'> Booking History </h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">FLIGHT</th>
                                <th scope="col">FROM</th>
                                <th scope="col">TO</th>
                                <th scope="col">DATE</th>
                                <th scope="col">TAKEOFF TIME</th>
                                <th scope="col">DURATION</th>
                                <th scope="col">FARE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pastFlights.map((flight, index) => (
                                <tr data-index={index}>
                                    <td>{flight.FlightNo}</td>
                                    <td>{flight.From}</td>
                                    <td>{flight.To}</td>
                                    <td>{flight.Date_}</td>
                                    <td>{flight.TakeOff_Time}</td>
                                    <td>{flight.Duration}</td>
                                    <td>{flight.Fare}</td>

                                </tr>
                            ))}

                        </tbody>
                    </table>
                    <div className='text-center mt-4'>
                        <button className="btn btn-primary btn-block" type="submit" onClick={showUpcomingBooking}
                            id="upcomingBooking"  >Active Booking</button>
                    </div>
                </div>


            </>
        )
    }
}

export default BookingHistory;