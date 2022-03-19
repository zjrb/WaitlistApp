import React, { useState, useEffect } from "react";
import {Routes, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import WaitlistDataService from "../services/waitlist.js"
import waitlist from "../services/waitlist.js";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import TableReadyMessage from "./Twilio Functions/tableReady.cjs";
import SendCustomMessage from "./Twilio Functions/tableReady.cjs";
import Modal from "./PopUpModalElements/Modal";

function Buttons(){
    async function SwapWaitlist() {
        
    }
    return (
        <div className="buttons-con row">
            <div className="col-6 button-div div-left">
                <div className="mini-logo-div button-div-item"></div>
                <div className="button-div-item wait-time">Average Wait Time:</div>
                <div className="button-div-item minutes">10 Minutes</div>
            </div>
            <div className="col-6 button-div" onClick={SwapWaitlist}>
                <div className="mini-logo-div button-div-item button-div-item-2">+</div>
                <div className="button-div-item wait-time">Add a</div>
                <div className="button-div-item minutes">New Party</div>
            </div>
        </div>
    )
}

export default Buttons