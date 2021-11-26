import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Context } from "../../GlobalFlightState/FlightContext";
import BookingHistory from "./UserBookingHistory";


const BookTicket = () => {

    const history = useHistory();

    const { globalState, globalSetState } = useContext(Context);

    const [state, setState] = useState([])

    // for passing data to history page 
    const [bookingdata, setbookingdata] = useState({});

    // console.log(globalState)

    useEffect(() => {
        submit()
    }, [])

    const back = () => {
        history.push('/showflight')
    }

    const makePayment = async () => {

        const paymentButton = document.getElementById('paymentbtn')
        const bookingHistoryButton2 = document.getElementById('bookingHistory2')

        const res = await fetch(`/user/payment/${globalState}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })

        const data = await res.json();

        if (res.status === 400) {
            window.alert('Sorry, Your Request not processed. Please try again');
        }
        else {
            setbookingdata(data.user._id);
            console.log(data.user._id)

            //  make the display of button none once paid
            paymentButton.style.display = 'none'
            bookingHistoryButton2.style.display = 'inline'
            window.alert('Ticket Booked.')
        }
    }


    const showBookingHistory = async () => {

        history.push({
            pathname: '/bookingHistory',
            state: { data: bookingdata }
        });
    }


    const submit = async () => {

        const res = await fetch(`/user/bookflight/${globalState}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })

        const data = await res.json();

        console.log(res.status);

        if (res.status === 400) {
            window.alert('Flight Not Found');
        }
        else {
            setState(data)
        }
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
                            <th scope="col">TAKEOFF TIME</th>
                            <th scope="col">DURATION</th>
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
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="form-group mt-4 text-center">
                    <button className="btn btn-primary btn-block" type="button" onClick={makePayment}
                        id="paymentbtn">Proceed to Pay</button>
                    <button className="btn btn-primary btn-block ms-4 me-4" type="button" onClick={back}
                        id="submit-btn">Go Back</button>
                    <button className="btn btn-primary btn-block" type="button" onClick={showBookingHistory}
                        id="bookingHistory2" style={{ display: 'none', textAlign: 'center' }} >Your Bookings</button>
                </div>
            </div>


        </>
    )
}


export default BookTicket;