import React, {useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from 'axios';
import './Auth.css'

export default function Welcome() {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [currentUser, setCurrentUser] = useState({})

    const history = useHistory()

    const options = {
        name: login,
        email,
        password,
        password_confirmation: confirmPassword,
    }

    async function signup(options) {
        try {
            const signupResp = await axios.post("/register", options);
            // setCurrentUser({ id: options.id, name: options.name });
            return signupResp;
        } catch (e) {
            return e.response;
        }
    }

    const handleRegisterSubmit = async (e) => {
        e.preventDefault()
        const res = await signup(options)


        if (res.status == 422) {
            setError(res.data.errors)
        } else if (res.status === 201) {
            setError('')
        } else {
            setError('Error')
        }

    }

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Welcome</h1>
                <form onSubmit={handleRegisterSubmit}>
                    <div>
                        <input
                            name="name"
                            placeholder="Name"
                            className="joinInput"
                            type="text"
                            onChange={(event) => setLogin(event.target.value)}
                        />
                    </div>
                    {error.name ? (<div className="alert alert-danger mt-1">{error.name[0]}</div>) : ''}
                    <div>
                        <input
                            name="email"
                            placeholder="Email"
                            className="joinInput"
                            type="email"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    {error.email ? (<div className="alert alert-danger mt-1">{error.email[0]}</div>) : ''}
                    <div>
                        <input
                            name="password"
                            placeholder="Password"
                            className="joinInput"
                            type="password"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            name="password_confirmation"
                            placeholder="Password again"
                            className="joinInput"
                            type="password"
                            onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                    </div>
                    {error.password ? (<div className="alert alert-danger mt-1">{error.password[0]}</div>) : ''}
                    {/*{error.password?.length > 1 ? (<div className="alert alert-danger mt-1">{error.password[1]}</div>) : ''}*/}
                    <div className="mt-2">
                        <button className="button mt-10" type="submit">
                            Register
                        </button>
                    </div>
                </form>
                <div className="link-login">
                    <p className="mt-2 mb-0 text-center">
                        Already have an account?{" "}
                        <Link to="/auth/login">Login here</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}
