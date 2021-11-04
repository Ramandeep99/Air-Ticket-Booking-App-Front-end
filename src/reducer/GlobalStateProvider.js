
import React from "react";
import { Context } from "./context";
import {GlobalState} from './useReducer';



 const GlobalStateProvider = ({children}) => {
    return (
        <Context.Provider value={GlobalState()}> {children}</Context.Provider>
    )
}

export default GlobalStateProvider;

