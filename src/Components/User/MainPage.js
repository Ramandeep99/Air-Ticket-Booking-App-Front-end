import React from "react";
import './Css/UserCss.css'
import { useHistory } from "react-router";

const MainPage = () => {

    const history = useHistory()

    const searchPage = () =>{
        history.push('userHome')
    }

    return (
        <>
            <div className='main-div2'>
                <div className='container'>

                    <div class="card mx-auto form-div2" style={{ width: "22rem" }}>
                        <img class="card-img-top" src="https://images.unsplash.com/photo-1454496406107-dc34337da8d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title text-center">Find Your Flight</h5>
                            <p class="card-text">Now no need to worry if you want to go anywhere, find lots of flight tickets to various destinations you want in just one app.</p>
                            <div class='text-center' >
                                <button className="btn btn-dark" type="button" onClick={searchPage}
                                    id="bookingHistory" style={{ textAlign: 'center' }} >Get Started</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default MainPage;