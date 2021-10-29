import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './App';

import GlobalStateProvider from "./reducer/GlobalStateProvider";

ReactDOM.render(
  <GlobalStateProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalStateProvider>,
  document.getElementById('root')
);




