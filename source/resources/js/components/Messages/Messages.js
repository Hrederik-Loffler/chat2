import React, { useState, useEffect } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import axios from "axios";
import Echo from "laravel-echo";
// import Socketio from "socket.io-client";
window.io = require('socket.io-client')

import Message from "./Message/Message";
import './messages.css'

window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: window.location.hostname + ":6001",
});

const Messages = ({ currentUser }) => {
    const [messages, setMessages] = useState([])

    const allMessages = () => {
        let res = axios.get('/messages').then((response) => {
            setMessages(response.data)
        })
    }

    useEffect(() => {
        allMessages()

        let channel = window.Echo.channel('chat');
        channel.listen('.room.chat', function (e){
            console.log('listen',e.message)
            const message = e.message;
            message.user = e.user;
            setMessages((state)=> [...state, message])
        })
    }, [])

    return (
        <ScrollToBottom className="box">
            {messages.map((message, i) => <div key={i}><Message message={message} currentUser={currentUser} /></div>)}
        </ScrollToBottom>
    )
}
export default Messages;
