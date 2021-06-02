import React, { useState, useEffect } from 'react'

import InfoBar from "../../components/InfoBar/InfoBar";
import Input from "../../components/Input/Input";
import Messages from "../../components/Messages/Messages";

import './chat.css'
import axios from "axios";

const Chat = () => {
    const [currentUser, setCurrentUser] = useState({})

    // async function getAuth() {
    //     try {
    //         const resAuth = await axios.get("/profile");
    //         return resAuth;
    //     } catch (e) {
    //         return e.response;
    //     }
    // }

    useEffect(() => {
        try {
            axios.get("/profile").then(response => {
                setCurrentUser({user: response.data.email})
            });
        } catch (e) {
            console.log(e)
        }


        // const getUser = async () => {
        //     const res = await getAuth()
        //     console.log(res)
        // }
    },[])

    console.log(currentUser)
    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar />
                <Messages currentUser={currentUser}/>
                <Input  />
            </div>
        </div>
    )
}
export default Chat
