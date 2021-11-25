import { useState } from "react";

export const GlobalState2 = () =>{
    const [globalState2, globalSetState2] = useState(localStorage.getItem('loginId'))

    return {globalState2, globalSetState2};
} 
