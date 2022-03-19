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

function CustomerPortal(){
    return (
        <div className="customer-portal">
            <p className="header-thingy">ZipThru</p>
            <div className="big-div">
                <div className="header">Bombay House</div>
            </div>
            <p>mas stuff</p>
        </div>
    )
}
export default CustomerPortal