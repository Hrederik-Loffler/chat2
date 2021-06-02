import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Welcome from "../pages/Welcome/Welcome";
import Login from "../pages/Auth/Login"
import Register from "../pages/Auth/Register"
import Chat from "../pages/Chat/Chat"

function App () {
    return (
        <Router>
            <Route path="/" exact component={Welcome} />
            <Route path="/auth/login" exact component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/chat" component={Chat} />
        </Router>
    )
}
export default App;
