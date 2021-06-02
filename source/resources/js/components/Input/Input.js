import React, {useState, useEffect} from "react";
// import FlashMessage from 'react-flash-message';
import axios from "axios";
// import Echo from "laravel-echo";
import Socketio from "socket.io-client";

import './input.css'

// const Input = ({ message, setMessage, sendMessage }) =>
const Input = () => {
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const options = {
        message
    }

    async function sendMessage (options) {
        try {
            const resMessage = await axios.post('/messages', options)
            return resMessage
        } catch (e) {
            return e.response
        }
    }

    const handleMessageSubmit = async (e) => {
        e.preventDefault()
        const res = await sendMessage(options)
        console.log(res)
        if (res.status == 401) {
            setError('You are not authorized')
            setMessage('')
        } else if (res.status == 500) {
            setError('Invalid data')
            setMessage('')
        }
        // messages.push(message)
        // setMessages(messages)
        setMessage('')
    }

    // const FlashMessage = (error) => (
    //     <FlashMessage duration={5000}>
    //         <strong>{error}</strong>
    //     </FlashMessage>
    // )

    return (
        <form className="form" onSubmit={handleMessageSubmit}>
            <input
                name="message"
                type="text"
                className="input"
                placeholder="Type a message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}

            />
            <button
                className="sendButton"
                type="submit"
            >
                Send
            </button>
        </form>
    )
}
export default Input;
