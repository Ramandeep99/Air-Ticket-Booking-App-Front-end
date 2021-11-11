
import React from "react";
import { Context } from "./FlightContext";
import {FlightGlobalState} from './Flightreducer';



 const FlightGlobalStateProvider = ({children}) => {
    return (
        <Context.Provider value={FlightGlobalState()}> {children}</Context.Provider>
    )
}

export default FlightGlobalStateProvider;


