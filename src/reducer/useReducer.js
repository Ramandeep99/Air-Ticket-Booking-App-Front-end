
import { useReducer , useState } from "react";


export const GlobalState = () =>{
    const [globalState, globalSetState] = useState(localStorage.getItem('login'))

    return {globalState, globalSetState};
} 