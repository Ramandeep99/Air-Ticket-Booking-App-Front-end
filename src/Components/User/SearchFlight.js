import React, { useEffect, useState } from "react";
import '../Admin/css/register.css'
import { useHistory, NavLink, Link } from 'react-router-dom';

const SearchFlight = ({ setflights }) => {

    // const[flights , setflights] = useState([])

    const history = useHistory()

    const [state, setState] = useState({
        From: '',
        To: '',
        Date_: ''
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setState((preValue) => {

            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const submit = async (e) => {
        e.preventDefault();

        const { From, To, Date_ } = state;

        var FromPass = true, ToPass = true, Date_Pass = true;

        if (From === '') {
            FromPass = false;
            window.alert('Please Enter Source');
        }
        else {
            var FromValReg = /^([A-Z][A-Za-z]{3,})$/;
            // console.log(FromValReg.test(From));
            if ((FromValReg.test(From)) === false) {
                FromPass = false;
                window.alert('Please Enter data at From field having  only alphabets followed by Capital letter and length atleast 3')
            }
        }

        if (To === '' && FromPass) {
            ToPass = false;
            window.alert('Please Enter Destination');
        }
        else if (FromPass) {
            var ToValReg = /^([A-Z][A-Za-z]{3,})$/;
            // console.log(ToValReg.test(From));
            if ((ToValReg.test(To)) === false) {
                ToPass = false;
                window.alert('Please Enter data at To field having  only alphabets followed by Capital letter and length atleast 3')
            }
        }
        // console.log(Date_)
        // if (Date_ === '' && ToPass && FromPass) {
        //     Date_Pass = false;
        //     window.alert('Please Enter Date')
        // }
        if (ToPass && FromPass) {
            if (Date_ !== '') {

                var currMili = new Date()
                currMili.setHours(0,0,0,0);
                currMili = currMili.getTime();

                var enterdMili = new Date(Date_)
                enterdMili.setHours(0,0,0,0);
                enterdMili = enterdMili.getTime()

                var combination = enterdMili - currMili;
                console.log(combination)

                if ((combination) < 0) {
                    Date_Pass = false;
                    alert("Date Time must be in the future");
                }
            }
        }

        if (FromPass && ToPass && Date_Pass) {
            setState({
                From: '', To: '', Date_: ''
            })

            const res = await fetch('/user/searchflight', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    From, To, Date_
                })
            });

            const data = await res.json();

            console.log(res.status);

            if (res.status === 400) {
                window.alert('Invalid Data!');
            }
            else {
                if (data.length > 0) {
                    setflights(data)
                    // console.log(data)
                    window.alert('Successful')
                }
                else {
                    window.alert('No Flights Scheduled for searched route!')
                }

            }
        }
    }

    const [allflights, setallflights] = useState([])

    const find = async () => {
        const res = await fetch('/admin/getflight', {
            method: 'GET'
        })

        const data = await res.json()
        // console.log(data)

        if (res.status === 400) {
            window.alert('Invalid Search!')
        }
        else {
            setallflights(data)
        }
    }

    useEffect(() => {
        find()
    }, [])

    const showBookingHistory = async () => {

        var g = new Object;
        var start = state.From, finish = state.To, flag = 0;
        console.log(allflights)

        allflights.forEach((flight) => {
            if (flight.From == start) {
                if (g["start"] == undefined) {
                    g["start"] = {}
                }
                if (flight.To == finish) {
                    g["start"]["finish"] = Number(flight.Duration)
                }
                else {
                    g["start"][flight.To] = Number(flight.Duration)
                }
            }
            else if (flight.From === finish) {
                if (g["finish"] == undefined) {
                    g["finish"] = {}
                }
                if (flight.To == start) {
                    flag = 1
                    g["finish"]["start"] = Number(flight.Duration)
                }
                else {
                    flag = 1
                    g["finish"][flight.To] = Number(flight.Duration)
                }
            }
            else if (flight.To === start) {

                if (g["finish"] == undefined) {
                    g["finish"] = {}
                }
                if (g[flight.From] == undefined) {
                    g[flight.From] = {}
                }
                if (flight.From === finish) {
                    flag = 1
                    g["finish"]["start"] = Number(flight.Duration)
                }
                else {
                    g[flight.From]["start"] = Number(flight.Duration)
                }
            }
            else if (flight.To === finish) {
                if (g["start"] == undefined) {
                    g["start"] = {}
                }
                if (g[flight.From] == undefined) {
                    g[flight.From] = {}
                }
                if (flight.From == start) {
                    g["start"]["finish"] = Number(flight.Duration)
                }
                else {
                    g[flight.From]["finish"] = Number(flight.Duration)
                }
            }
            else {
                if (g[flight.From] == undefined) {
                    g[flight.From] = {}
                }
                g[flight.From][flight.To] = Number(flight.Duration)
            }
        })

        if (flag === 0) {
            g["finish"] = {}
        }

        console.log(g);


        history.push({
            pathname: '/path',
            state: {
                graph: g,
                From: state.From,
                To: state.To
            }
        });

    }

    return (
        <>
            {/* <div id='register'> */}
            {/* <div className="container text-center main-div"> */}
            <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-6 col-md-6">

                    <form className="form-div" id="form" method="POST">

                        <h2 className="mb-3">Search Flight</h2>

                        <div className="form-group">
                            <input required name="From" className="form-control mb-3"
                                placeholder="From" onChange={handleChange}
                                type="text"
                                value={state.From} />
                        </div>

                        <div className="form-group">
                            <input required name="To" className="form-control  mb-3"
                                placeholder="To" onChange={handleChange}
                                type="text"
                                value={state.To} />
                        </div>

                        <div className="form-group mb-4">
                            <input onChange={handleChange}
                                className='form-control'
                                name="Date_"
                                type="date"
                                value={state.Date_}
                                placeholder="Date" />
                        </div>
                        <div className="form-group mt-4">
                            <button className="btn btn-primary btn-block" type="button" onClick={submit}
                                id="submit-btn">Schedule</button>

                            <button className="btn btn-primary btn-block ms-3" type="button" onClick={showBookingHistory}
                                id="bookingHistory"  >Route Map</button>
                            {/* 
                            <Link className="btn btn-primary btn-block ms-3" type="submit" to='/path'
                                id="submit-btn" params={{ From: state.From, To: state.To }} >Route Map</Link> */}
                        </div>

                    </form>
                </div>
            </div>

        </>
    )
}

export default SearchFlight;