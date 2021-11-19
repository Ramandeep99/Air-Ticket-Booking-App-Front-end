import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

const EditFlight = ({ selectFlight }) => {

    console.log(selectFlight)

    const history = useHistory();



    const [state, setState] = useState({
        FlightNo: '',
        From: '',
        To: '',
        Date_: '',
        TakeOff_Time: '',
        Duration:'',
        Fare: ''
    })

    const setInitial = async () => {

        const res = await fetch(`/admin/getsingleflight/${selectFlight}`)

        const data = await res.json()
        
        setState(data);
        console.log(data)
    }

    useEffect(() => {
        setInitial()
    }, [])

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

        const { FlightNo, From, To, Date_, TakeOff_Time,Duration, Fare } = state;
        var FlightNoPass = true, FromPass = true, ToPass = true, Date_Pass = true, TimePass = true,DurationPass=true, FarePass = true;

        if (FlightNo === '') {
            FlightNoPass = false;
            window.alert('Please Enter FlightNo')
        }
        else {
            var flightValReg = /^([A-Za-z0-9]{4,})$/;
            // console.log(flightValReg.test(FlightNo));
            if ((flightValReg.test(FlightNo)) === false) {
                FlightNoPass = false;
                window.alert('Please Enter data at FlightNo field having  only alphabets, numeric characters and length atleast 4')
            }
        }

        if (From === '' && FlightNoPass) {
            FromPass = false;
            window.alert('Please Enter Starting Point')
        }
        else if (FlightNoPass) {
            var FromValReg = /^([A-Z][A-Za-z]{3,})$/;
            // console.log(FromValReg.test(From));
            if ((FromValReg.test(From)) === false) {
                FromPass = false;
                window.alert('Please Enter data at From field having  only alphabets followed by Capital letter and length atleast 3')
            }
        }

        if (To === '' && FromPass && FlightNoPass) {
            ToPass = false;
            window.alert('Please Enter Destination')
        }
        else if (FromPass && FlightNoPass) {
            var ToValReg = /^([A-Z][A-Za-z]{3,})$/;
            // console.log(ToValReg.test(From));
            if ((ToValReg.test(To)) === false) {
                ToPass = false;
                window.alert('Please Enter data at To field having  only alphabets followed by Capital letter and length atleast 3')
            }
        }
        if (Date_ === '' && ToPass && FromPass && FlightNoPass) {
            Date_Pass = false;
            window.alert('Please Enter Date')
        }

        // console.log(Date_Pass)

        if (TakeOff_Time === '' && ToPass && FromPass && FlightNoPass && Date_Pass) {
            TimePass = false;
            window.alert('Please Enter Time')
        }
        else if (ToPass && FromPass && FlightNoPass && Date_Pass) {

            var timeParts = TakeOff_Time.split(":");
            var milisec = (+timeParts[0] * (60000 * 60)) + (+timeParts[1] * 60000);

            var minusTime = "05:30".split(':')
            var minusMili = (+minusTime[0] * (60000 * 60)) + (+minusTime[1] * 60000);

            var currMili = new Date()
            // console.log(currMili)
            currMili = currMili.getTime();

            var enterdMili = new Date(Date_)
            // console.log(enterdMili)
            enterdMili = enterdMili.getTime()

            var combination = (enterdMili + milisec) - (currMili + minusMili)
            console.log(combination)
            // console.log(milisec)

            if ((combination) < 0) {
                Date_Pass = false;
                alert("Date Time must be in the future");
            }
        }

        if (Duration === '' && ToPass && FromPass && FlightNoPass && TimePass && Date_Pass) {
            DurationPass = false;
            window.alert('Please Enter Fare')
        }
        else{
            
        }

        if (Fare === '' && ToPass && FromPass && FlightNoPass && TimePass && Date_Pass && DurationPass) {
            FarePass = false;
            window.alert('Please Enter Fare')
        }
        else if (ToPass && FromPass && FlightNoPass && TimePass && Date_Pass && DurationPass) {
            var FareValReg = /^(\$\w+)([0-9]*)$/;
            if ((FareValReg.test(Fare)) === false) {
                FarePass = false;
                window.alert('Please Enter data at To Fare field having only numeric characters, non-zero starting value followed by $')
            }
        }

        if (FlightNoPass && FromPass && ToPass && Date_Pass && TimePass && FarePass) {
            setState({
                FlightNo: '', From: '', To: '', Date_: '', TakeOff_Time: '',Duration:'', Fare: ''
            })

            console.log(FlightNo, From, To, Date_, TakeOff_Time,Duration, Fare)

            const res = await fetch(`/admin/editflight/${selectFlight}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    FlightNo, From, To, Date_, TakeOff_Time,Duration, Fare
                })
            })

            const data = await res.json();

            console.log(data)

            if (res.status === 404) {
                window.alert('Invalid Data!')
            }
            else {
                window.alert('Successful Updated!')
                history.push('/showflight');
            }

        }
    }
    return (
        <>

            <div id='register'>
                <div className="container text-center main-div1">
                    <div className="row justify-content-center">
                        {/* <div className="col-lg-4 col-sm-6 col-md-6"> */}

                        {/* <!-- action="/login_signup/register" method="POST" --> */}
                        <form className="form-div1" id="form">
                            <h2 className="mb-4">Add Flight</h2>

                            <div className="form-group mb-4">
                                <input required type="text" id="FlightNo" className="form-control"
                                    placeholder="Flight Number" onChange={handleChange}
                                    name="FlightNo"
                                    value={state.FlightNo} />
                            </div>
                            <div className="form-FlightNo"></div>

                            <div className="form-group mb-4">
                                <input required type="text" name="From"
                                    placeholder="From" onChange={handleChange}
                                    className='form-control'
                                    value={state.From} />
                            </div>
                            <div className="form-From"></div>

                            <div className="form-group mb-4">
                                <input required name="To" className="form-control"
                                    placeholder="To" onChange={handleChange}
                                    type="text"
                                    value={state.To} />
                            </div>
                            <div className="form-To"></div>

                            <div className="form-group mb-4">
                                <input required onChange={handleChange}
                                    className='form-control'
                                    name="Date_"
                                    type="date"
                                    value={state.Date_}
                                    placeholder="Date" />
                            </div>
                            <div className="form-group mb-4">
                                <input required onChange={handleChange}
                                    className='form-control'
                                    name="TakeOff_Time"
                                    type="time"
                                    value={state.TakeOff_Time}
                                    placeholder="Time" />
                            </div>

                            <div className="form-group mb-4">
                                <input required onChange={handleChange}
                                    className='form-control'
                                    name="Duration"
                                    type="text"
                                    value={state.Duration}
                                    placeholder="Duration" />
                            </div>

                            <div className="form-group mb-4">
                                <input required onChange={handleChange}
                                    className='form-control'
                                    name="Fare"
                                    type="text"
                                    value={state.Fare}
                                    placeholder="Fare" />
                            </div>

                            

                            {/* <div className="form-group mb-4 d-flex">

                                <div className="mx-2" >
                                    <input type="checkbox" name="mon" onChange={handleChange} value={state.mon} />
                                    <label for="scales">Mon</label>
                                </div>

                                <div className="mx-2">
                                    <input type="checkbox" name="tue" onChange={handleChange} value={state.tue} />
                                    <label for="horns">Tue</label>
                                </div>
                                <div className="mx-2">
                                    <input type="checkbox" name="wed" onChange={handleChange} value={state.wed} />
                                    <label for="horns">Wed</label>
                                </div>
                                <div className="mx-2">
                                    <input type="checkbox" name="thur" onChange={handleChange} value={state.thur} />
                                    <label for="horns">Thur</label>
                                </div>
                                <div className="mx-2">
                                    <input type="checkbox" name="fri" onChange={handleChange} value={state.fri} />
                                    <label for="horns"> Fri</label>
                                </div>
                                <div className="mx-2">
                                    <input type="checkbox" name="sat" onChange={handleChange} value={state.sat} />
                                    <label for="horns">Sat</label>
                                </div>
                                <div className="mx-2">
                                    <input type="checkbox" name="sun" onChange={handleChange} value={state.sun} />
                                    <label for="horns">Sun</label>
                                </div>

                            </div> */}


                            <div className="form-group mt-4">
                                <button className="btn btn-primary btn-block" type="submit" onClick={submit}
                                    id="submit-btn">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>

        </>
    )
}


export default EditFlight;