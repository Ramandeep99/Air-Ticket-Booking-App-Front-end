
import { useState } from "react";


export const FlightGlobalState = () =>{
    const [globalState, globalSetState] = useState('')

    return {globalState, globalSetState};
} 

