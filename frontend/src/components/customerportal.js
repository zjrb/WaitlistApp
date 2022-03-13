import React, { useState, useEffect } from "react";
import {Routes, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import WaitlistDataService from "../services/waitlist.js"
import waitlist from "../services/waitlist.js";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import TableReadyMessage from "./Twilio Functions/tableReady.js";
import SendCustomMessage from "./Twilio Functions/tableReady.js";
import Modal from "./PopUpModalElements/Modal";

function CustomerPortal(){
    return (
        <p>hello</p>
    )
}
export default CustomerPortal