import React, { useEffect } from "react";

import './message.css'

//I need to have here props " one <message>" and "name"
//from Messages component where i try to map all messages to one message

// const Message = ({ message: { user, text }, name }) => {
//     let isSentByCurrentUser = false;
//     /* i need a lowerCase name for backend */
//     const trimmedName = name.trim().toLowerCase()
//     //where i need put message
//     if (user === trimmedName) {
//         isSentByCurrentUser = true
//     }
const Message = ({ message, currentUser }) => {
    let isSentByCurrentUser = false;
    /* i need a lowerCase name for backend */
    // const trimmedName = name.trim().toLowerCase()
    //where i need put message
    if (currentUser.user == message.user.email) {
        isSentByCurrentUser = true
    }

    // useEffect(() => {
    //     console.log(message.user.email)
    // }, [])

    return (
        isSentByCurrentUser ?
            (
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">{message.user.name}</p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText">{message.message}</p>
                    </div>
                </div>
            )
            :
            (
                <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">{message.message}</p>
                    </div>
                    <p className="sentText pl-10">{message.user.name}</p>
                </div>
            )
    )
}

export default Message;
