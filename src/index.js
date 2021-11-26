import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css'


// to maintain signin signup state
import GlobalStateProvider from "./reducer/GlobalStateProvider";
import GlobalStateProvider2 from "./UserGlobalState/UserGlobalStateProvider";

// to maintain flight select for booking
import FlightGlobalStateProvider from "./GlobalFlightState/FlightGlobalState";

ReactDOM.render(

  <GlobalStateProvider>
    <GlobalStateProvider2>
      <FlightGlobalStateProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FlightGlobalStateProvider>
    </GlobalStateProvider2>
  </GlobalStateProvider>,
  document.getElementById('root')
);




