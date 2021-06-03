import React, { useEffect } from "react";
import './message.css'

const Message = ({ message, currentUser }) => {
    let isSentByCurrentUser = false;

    if (currentUser.user == message.user.email) {
        isSentByCurrentUser = true
    }

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
