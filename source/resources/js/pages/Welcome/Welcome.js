import React, {useState, useEffect } from "react";
import {Link} from "react-router-dom";

import './Welcome.css'

export default function Welcome () {
    return (
        <div className="flex-center position-ref full-height">
            <div className="content">
                <div className="title m-b-md">
                    LaraChat
                </div>

                <div className="links">
                    <Link to="/chat">Chat</Link>
                    <Link to="/auth/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </div>
    )
}
