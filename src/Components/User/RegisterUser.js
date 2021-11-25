

import React, { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';

import '../Admin/css/register.css'
import { Alert } from '../ShowAlert';

const RegisterUser = () => {

    const history = useHistory();

    const [state, setState] = useState({
        Name: '',
        email: '',
        password: '',
        confirm_password: ''
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

        const { Name, email, password, confirm_password } = state;
        var namePass = true, emailPass = true, passwordPass = true, confirm_passwordPass = true;
        if (Name === '') {
            namePass = false;
            Alert('Please Enter Your Name' , 'warning')
        }
        if (email === '' && namePass) {
            emailPass = false;
            Alert('Please Enter Emailid' , 'warning')
        }
        if (password === '' && email && namePass) {
            passwordPass = false;
            Alert('Please Enter Password' , 'warning')
        }
        if (confirm_password === '' && password && email && namePass) {
            confirm_passwordPass = false;
            Alert('Please Re-Enter Password' , 'warning')
        }

        if (namePass && emailPass && passwordPass && confirm_passwordPass) {
            setState({
                Name: '', email: '', password: '', confirm_password: ''
            })

            // console.log(Name , email , password , confirm_password)

            const res = await fetch('/user/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Name, email, password, confirm_password
                })
            })


            const data = await res.json();

            console.log(res.status)

            if (res.status === 404) {
                window.alert('Invalid Data!')
            }
            else {
                window.alert('Successful Registeration!')
                history.push('/loginUser');
            }
        }
    }


    return (
        <>

            <div id='register'>
                <div className="container text-center main-div">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6 col-md-6">

                            {/* <!-- action="/login_signup/register" method="POST" --> */}
                            <form className="form-div" id="form">

                                <h2 className="mb-3">REGISTER</h2>
                                <div className="form-group mb-3">
                                    <input required type="text" id="name" className="form-control"
                                        placeholder="Name" onChange={handleChange}
                                        name="Name"
                                        value={state.Name} />
                                </div>
                                <div className="form-name"></div>

                                <div className="form-group mb-3">
                                    <input required type="text" name="email" id="email"
                                        placeholder="Email Id" onChange={handleChange}
                                        className='form-control'
                                        value={state.email} />
                                </div>
                                <div className="form-email"></div>

                                <div className="form-group mb-3">
                                    <input required name="password" id="password" className="form-control"
                                        placeholder="Password" onChange={handleChange}
                                        type="text"
                                        value={state.password} />
                                </div>
                                <div className="form-password"></div>

                                <div className="form-group mb-3">
                                    <input required id="confirm-password" onChange={handleChange}
                                        className='form-control'
                                        name="confirm_password"
                                        type="text"
                                        value={state.confirm_password}
                                        placeholder="Confirm Password" />
                                </div>
                                <div className="form-cpassword"></div>

                                <div className="form-group mt-4 ">
                                    <button className="btn btn-primary btn-block" type="submit" onClick={submit}
                                        id="submit-btn">Submit</button>
                                </div>

                                <div className="form-group mt-4">
                                    <p>Already Have an Account. <NavLink to="/loginUser">Login Here</NavLink></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default RegisterUser;