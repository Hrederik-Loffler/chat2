import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

import InfoBar from "../../components/InfoBar/InfoBar";
import Input from "../../components/Input/Input";
import Messages from "../../components/Messages/Messages";

import './chat.css'
import 'react-toastify/dist/ReactToastify.css';


const Chat = () => {
    const [currentUser, setCurrentUser] = useState({})
    const notify = () => toast("You are not autorizated!");

    useEffect(() => {
        try {
            axios.get("/profile").then(response => {
                setCurrentUser({user: response.data.email})
            }).catch(e => {
                if (e == 'Error: Request failed with status code 401') {
                    notify()
                }
            });
        } catch (e) {
            //
        }
    },[])

    return (
        <div className="outerContainer">
            <ToastContainer position="top-right"/>
            <div className="container">
                <InfoBar />
                <Messages currentUser={currentUser}/>
                <Input  />
            </div>
        </div>
    )
}
export default Chat
