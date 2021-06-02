import React, { useState, useEffect } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import axios from "axios";

import Message from "./Message/Message";
import './messages.css'

const Messages = ({ currentUser }) => {
    const [messages, setMessages] = useState([])

    const allMessages = () => {
        let res = axios.get('/messages').then((response) => {
            setMessages(response.data)
        })
    }
    useEffect(() => {
        allMessages()
    }, [messages])

    return (
        <ScrollToBottom className="box">
            {messages.map((message, i) => <div key={i}><Message message={message} currentUser={currentUser} /></div>)}
        </ScrollToBottom>
    )
}
export default Messages;
