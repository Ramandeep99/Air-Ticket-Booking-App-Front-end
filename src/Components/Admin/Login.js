
import React, { useContext, useState } from 'react';
import { useHistory ,NavLink } from 'react-router-dom';
import './css/register.css'

import { Context } from '../../reducer/context';

const Login = () => {

    const {globalState, globalSetState} = useContext(Context);

    const history = useHistory();

    const [state, setState] = useState({
        email: '',
        password: ''
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

        const { email, password } = state;
        var emailPass = true, passwordPass = true;

        if (email === '') {
            emailPass = false;
            window.alert('Please Enter Emailid')
        }
        if (password === '' && email) {
            passwordPass = false;
            window.alert('Please Enter Password')
        }


        if (emailPass && passwordPass) {
            setState({
                email: '', password: ''
            })


            const res = await fetch('/admin/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email, password
                })
            })


            const data = await res.json();

            console.log(data)
            console.log(res.status)

            if (res.status === 400) {
                window.alert('Invalid Data!')
            }
            else {
                localStorage.setItem('login' , true);
                globalSetState(localStorage.getItem('login'))
                window.alert('Successful Logged In')
                history.push("/")
            }

        }
    }


    return (
        <>

            <div id='register'>
                <div className="container text-center main-div">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6 col-md-6">

                            <form className="form-div" id="form" method="POST">

                                <h2 className="mb-3">LOGIN</h2>

                                <div className="form-group">
                                    <input required type="text" name="email" id="email"
                                        placeholder="Email Id" onChange={handleChange}
                                        className='form-control'
                                        value={state.email} />
                                </div>
                                <div className="form-email"></div>

                                <div className="form-group">
                                    <input required name="password" id="password" className="form-control"
                                        placeholder="Password" onChange={handleChange}
                                        type="text"
                                        value={state.password} />
                                </div>

                                <div className="form-group mt-4">
                                    <button className="btn btn-primary btn-block" type="submit" onClick={submit} 
                                        id="submit-btn">Submit</button>
                                </div>
                      
                                <div className="form-group mt-4">
                                    <p>Don't Have an Account. <NavLink to="/register">Register Here</NavLink></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Login;