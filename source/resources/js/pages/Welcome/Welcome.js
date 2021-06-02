import React, {useState, useEffect } from "react";

import './Welcome.css'
import {Link} from "react-router-dom";
export default function Welcome () {
    return (
        <div className="flex-center position-ref full-height">
            <div className="content">
                <div className="title m-b-md">
                    LaraChat
                </div>

                <div className="links">
                    <a href="/">Home</a>
                    <Link to="/auth/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </div>
    )
}
