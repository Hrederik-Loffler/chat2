import React from "react";

import onlineIcon from '../../../icons/onlineIcon.png'
import closeIcon from '../../../icons/closeIcon.png'


import './InfoBar.css'

// const InfoBar = ({ room }) =>
const InfoBar = () => {

    async function logout () {
        try {
            const res = await axios.post("/logout");
        } catch (e) {
            //console.log('logout')
        }
    }

    const handlerLogout = async (e) => {
        const res = await logout();
    }

    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online image"/>
                <h3>room</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="close image" onClick={handlerLogout}/></a>
            </div>
        </div>
    )
}
export default InfoBar;
