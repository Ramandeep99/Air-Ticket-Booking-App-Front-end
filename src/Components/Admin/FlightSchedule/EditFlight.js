import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const EditFlight = (props) => {
    console.log(props)
    return (
        <>
            <h1> Hello from Edit Page </h1>
        </>
    )

    // const history = useHistory();

    // const [state, setState] = useState({
    //     FlightNo: '',
    //     From: '',
    //     To: '',
    //     Date: '',
    //     Time: '',
    //     Fare: ''
    // })

    // const handleChange = (e) => {
    //     const name = e.target.name
    //     const value = e.target.value

    //     setState((preValue) => {

    //         return {
    //             ...preValue,
    //             [name]: value
    //         }
    //     })
    // }


    // const submit = async (e) => {
    //     e.preventDefault();

    //     const { FlightNo, From, To, Date_, Time, Fare} = state;
    //     var FlightNoPass = true, FromPass = true, ToPass = true, Date_Pass = true, TimePass = true, FarePass = true;
    //     if (FlightNo === '') {
    //         FlightNoPass = false;
    //         window.alert('Please Enter FlightNo')
    //     }
    //     if (From === '' && FlightNoPass) {
    //         FromPass = false;
    //         window.alert('Please Enter Starting Point')
    //     }
    //     if (To === '' && FromPass && FlightNoPass) {
    //         ToPass = false;
    //         window.alert('Please Enter Destination')
    //     }
    //     if (Date_ === '' && ToPass && FromPass && FlightNoPass) {
    //         Date_Pass = false;
    //         window.alert('Please Enter Date')
    //     }
    //     if (Time === '' && ToPass && FromPass && FlightNoPass && Date_Pass) {
    //         TimePass = false;
    //         window.alert('Please Enter Time')
    //     }
    //     if (Fare === '' && ToPass && FromPass && FlightNoPass && TimePass && Date_Pass) {
    //         FarePass = false;
    //         window.alert('Please Enter Fare')
    //     }

    //     if (FlightNoPass && FromPass && ToPass && Date_Pass && TimePass && FarePass) {
    //         setState({
    //             FlightNo: '', From: '', To: '', Date_: '', Time: '', Fare: ''
    //         })

    //         console.log(FlightNo, From, To, Date_, Time, Fare)

    //         const res = await fetch('/admin/addflight', {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 FlightNo, From, To, Date_, Time, Fare
    //             })
    //         })

    //         const data = await res.json();

    //         console.log(data)

    //         if (res.status === 404) {
    //             window.alert('Invalid Data!')
    //         }
    //         else {
    //             window.alert('Successful Added!')
    //             history.push('/showflight');
    //         }

    //     }
    // }
    // return (
    //     <>

    //         <div id='register'>
    //             <div className="container text-center main-div1">
    //                 <div className="row justify-content-center">
    //                     {/* <div className="col-lg-4 col-sm-6 col-md-6"> */}

    //                     {/* <!-- action="/login_signup/register" method="POST" --> */}
    //                     <form className="form-div1" id="form">
    //                         <h2 className="mb-4">Add Flight</h2>

    //                         <div className="form-group mb-4">
    //                             <input required type="text" id="FlightNo" className="form-control"
    //                                 placeholder="Flight Number" onChange={handleChange}
    //                                 name="FlightNo"
    //                                 value={state.FlightNo} />
    //                         </div>
    //                         <div className="form-FlightNo"></div>

    //                         <div className="form-group mb-4">
    //                             <input required type="text" name="From"
    //                                 placeholder="From" onChange={handleChange}
    //                                 className='form-control'
    //                                 value={state.From} />
    //                         </div>
    //                         <div className="form-From"></div>

    //                         <div className="form-group mb-4">
    //                             <input required name="To" className="form-control"
    //                                 placeholder="To" onChange={handleChange}
    //                                 type="text"
    //                                 value={state.To} />
    //                         </div>
    //                         <div className="form-To"></div>

    //                         <div className="form-group mb-4">
    //                             <input required onChange={handleChange}
    //                                 className='form-control'
    //                                 name="Date_"
    //                                 type="date"
    //                                 value={state.Date_}
    //                                 placeholder="Date" />
    //                         </div>
    //                         <div className="form-group mb-4">
    //                             <input required onChange={handleChange}
    //                                 className='form-control'
    //                                 name="Time"
    //                                 type="time"
    //                                 value={state.Time}
    //                                 placeholder="Time" />
    //                         </div>
    //                         <div className="form-group mb-4">
    //                             <input required onChange={handleChange}
    //                                 className='form-control'
    //                                 name="Fare"
    //                                 type="text"
    //                                 value={state.Fare}
    //                                 placeholder="Fare" />
    //                         </div>

    //                         <div className="form-group mb-4 d-flex">

    //                             <div className="mx-2" >
    //                                 <input type="checkbox" name="mon" onChange={handleChange} value={state.mon} />
    //                                 <label for="scales">Mon</label>
    //                             </div>

    //                             <div className="mx-2">
    //                                 <input type="checkbox" name="tue" onChange={handleChange} value={state.tue} />
    //                                 <label for="horns">Tue</label>
    //                             </div>
    //                             <div className="mx-2">
    //                                 <input type="checkbox" name="wed" onChange={handleChange} value={state.wed} />
    //                                 <label for="horns">Wed</label>
    //                             </div>
    //                             <div className="mx-2">
    //                                 <input type="checkbox" name="thur" onChange={handleChange} value={state.thur} />
    //                                 <label for="horns">Thur</label>
    //                             </div>
    //                             <div className="mx-2">
    //                                 <input type="checkbox" name="fri" onChange={handleChange} value={state.fri} />
    //                                 <label for="horns"> Fri</label>
    //                             </div>
    //                             <div className="mx-2">
    //                                 <input type="checkbox" name="sat" onChange={handleChange} value={state.sat} />
    //                                 <label for="horns">Sat</label>
    //                             </div>
    //                             <div className="mx-2">
    //                                 <input type="checkbox" name="sun" onChange={handleChange} value={state.sun} />
    //                                 <label for="horns">Sun</label>
    //                             </div>

    //                         </div>


    //                         <div className="form-group mt-4">
    //                             <button className="btn btn-primary btn-block" type="submit" onClick={submit}
    //                                 id="submit-btn">Submit</button>
    //                         </div>

    //                     </form>
    //                 </div>
    //             </div>

    //         </div>

    //     </>
    // )
}


export default EditFlight;