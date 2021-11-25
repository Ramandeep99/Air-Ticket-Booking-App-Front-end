

import React from "react";
import { UserContext } from "./UserContext";
import {GlobalState2} from './UserReducer';



const GlobalStateProvider2 = ({children}) => {
    return (
        <UserContext.Provider value={GlobalState2()}> {children}</UserContext.Provider>
    )
}


export default GlobalStateProvider2