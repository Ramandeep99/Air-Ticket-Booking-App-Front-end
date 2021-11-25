import React, { useContext } from "react";
import GoogleLogin from 'react-google-login'
import { useHistory } from "react-router";

import { Context } from "../../reducer/context";
import { UserContext } from "../../UserGlobalState/UserContext";

const GLogin = () => {

    const history = useHistory()

    const { globalState, globalSetState } = useContext(Context);
    const { globalState2, globalSetState2 } = useContext(UserContext);

    const responseSuccessGoogle = async (response) => {
        console.log(response)
        const res = await fetch('/user/googlelogin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                tokenId: response.tokenId
            })
        })

        const data = await res.json();

        console.log(data)

        if (res.status !== 200) {
            window.alert('Login Failed!');
        }
        else {
            // localStorage.setItem('login', true);
            // globalSetState(localStorage.getItem('login'));
            // window.alert('Successful Logged In');
            // history.push("/userHome");

            localStorage.setItem('login', true);
            localStorage.setItem('loginId', data.userId);
            globalSetState(localStorage.getItem('login'));
            globalSetState2(localStorage.getItem('loginId'));
            window.alert('Successful Logged In');
            history.push("/userHome");
        }
    }

    const responseErrorGoogle = () => {

    }

    return (

        <>
            {/* <div className='text-center'> */}
            <GoogleLogin
                clientId="253706091317-mm1rn3rcj7kdh7tfqo85jthdbt1hh6jn.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseSuccessGoogle}
                onFailure={responseErrorGoogle}
                cookiePolicy={'single_host_origin'}

            />
            {/* </div> */}
        </>
    )
}

export default GLogin;