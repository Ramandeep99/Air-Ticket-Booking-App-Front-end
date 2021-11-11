import React, { useState } from "react";
import '../Admin/css/register.css'
import { useHistory, NavLink } from 'react-router-dom';

const SearchFlight = ({ setflights }) => {

    // const[flights , setflights] = useState([])

    const [state, setState] = useState({
        From: '',
        To: ''
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

        const { From, To } = state;

        var FromPass = true, ToPass = true;

        if (From === '') {
            FromPass = false;
            window.alert('Please Enter Source');
        }
        if (To === '' && From) {
            ToPass = false;
            window.alert('Please Enter Destination');
        }

        if (FromPass && ToPass) {
            setState({
                From: '', To: ''
            })

            const res = await fetch('/user/searchflight', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    From, To
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
                else{
                    window.alert('No Flights Scheduled for searched route!')
                }

            }
        }
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
                        <div className="form-group mt-4">
                            <button className="btn btn-primary btn-block" type="submit" onClick={submit}
                                id="submit-btn">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
            {/* </div> */}
            {/* // </div> */}
        </>
    )
}

export default SearchFlight;