import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './App';

// to maintain signin signup state
import GlobalStateProvider from "./reducer/GlobalStateProvider";

// to maintain flight select for booking
import FlightGlobalStateProvider from "./GlobalFlightState/FlightGlobalState";

ReactDOM.render(

  <GlobalStateProvider>
    <FlightGlobalStateProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FlightGlobalStateProvider>
  </GlobalStateProvider>,
  document.getElementById('root')
);




