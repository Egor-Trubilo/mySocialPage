import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import state from "./redux/state"




ReactDOM.render(<App state={state} />, document.getElementById('root'));
