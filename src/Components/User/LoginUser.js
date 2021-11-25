
import React, { useContext, useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import '../Admin/css/register.css'
import { Alert } from '../ShowAlert';
import { Context } from '../../reducer/context';
import { UserContext } from '../../UserGlobalState/UserContext';
import GLogin from './GoogleLogin';

const Login = () => {

    const { globalState, globalSetState } = useContext(Context);

    const { globalState2, globalSetState2 } = useContext(UserContext);

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

        const email_error = document.getElementById('emailError');
        const password_error = document.getElementById('passwordError');
        const error = document.getElementById('Error');

        const { email, password } = state;
        var emailPass = true, passwordPass = true;

        if (email === '') {
            emailPass = false;
            Alert('Please Enter Email-id' , 'warning')
        }
        if (password === '' && email) {
            passwordPass = false;
            Alert('Please Enter Password' , 'warning')
        }


        if (emailPass && passwordPass) {
            setState({
                email: '', password: ''
            });



            const res = await fetch('/user/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email, password
                })
            });


            const data = await res.json();

            console.log(data.msg);
            console.log(res.status);

            if (res.status === 400) {
                Alert('Invalid Login Credentials' , 'warning')
            }
            else if (data.msg === 'ADMIN') {
                localStorage.setItem('admin', true);
                globalSetState(localStorage.getItem('admin'));
                window.alert('Successful Admin Logged In');
                history.push("/");
            }
            else {
                localStorage.setItem('login', true);
                localStorage.setItem('loginId', data.userId);
                globalSetState(localStorage.getItem('login'));
                globalSetState2(localStorage.getItem('loginId'));
                window.alert('Successful Logged In');
                history.push("/userHome");
            }

        }
    }


    return (
        <>

            <div id='register'>
                <div className="container text-center main-div">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6 col-md-6">


                            <div className='m-5'> <span id="Error"></span></div>

                            <form className="form-div" id="form" method="POST">


                                <h2 className="mb-3">LOGIN</h2>

                                <div className="form-group mt-4 mb-4">
                                    <input required type="text" name="email" id="email"
                                        placeholder="Email" onChange={handleChange}
                                        className='form-control'
                                        value={state.email} />
                                </div>
                                <div className="form-email"></div>
                                <span id="emailError"></span>

                                <div className="form-group mt-4 mb-4">
                                    <input required name="password" id="password" className="form-control"
                                        placeholder="Password" onChange={handleChange}
                                        type="text"
                                        value={state.password} />
                                </div>
                                <span id="passwordError"></span>

                                <div className="form-group mt-4">
                                    <button className="btn btn-primary btn-block mx-3" type="submit" onClick={submit}
                                        id="submit-btn">Submit</button>
                                    <GLogin />
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