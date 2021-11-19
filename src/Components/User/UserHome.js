import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import SearchFlight from "./SearchFlight";
import ShowSearchedFlight from "./ShowSearchedFlight";
// arvinder singh

const Clock = () => {

    var currentdate = new Date();
    var datetime = currentdate.toLocaleTimeString()

    const [count, setCount] = useState(datetime);

    const IncVal = () => {

        var currentdate = new Date();
        var currentDateTime = currentdate.toLocaleTimeString();
        setCount(currentDateTime);
    }

    setInterval(IncVal, 1000);

    return (
        <>
            <div className='mainDiv'>
                <h1> {count} </h1>
            </div>

        </>
    )
}


const Home = () => {

    const history = useHistory();

    const [flights, setflights] = useState([])

    useEffect(() => {
        console.log('user Home page')
        console.log(flights)
    }, [])

    const back = () => {
        setflights([])
    }

    const Display = () => {
        if (flights.length === 0) {
            return (
                <>
                    <div className='text-center'>
                        <SearchFlight setflights={setflights} />
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    <ShowSearchedFlight flights={flights} />

                    <div className='text-center'>
                        <div className="form-group mt-4">
                            <button className="btn btn-primary btn-block" type="button" onClick={back}
                                id="submit-btn">Go Back</button>
                        </div>
                    </div>
                </>
            )
        }
    }

    return (
        <>

            <div className="container">
                <div className='text-center mt-3'> <Clock /> </div>
                <Display />
            </div>

        </>
    )
}

export default Home;
