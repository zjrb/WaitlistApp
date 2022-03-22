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
import Buttons from "./buttons.js";
import Waitlist from "./waitlist.js";
import AddToWaitlist from "./addToWaitlist.js";


class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            waitlist: true,
            
        }
        this.changeComponent = this.changeComponent.bind(this);
    }

    changeComponent(myBool) {
        this.setState({waitlist: myBool})
    }

    render() {
        return (
            <div className="customCon mt-3 pageMain">
                <div className="row">
                    <div className="col-2 flex-col">
                    <div className="btn btn-primary btn-purple sidebar-element">Bombay House</div>
                    <p className="sidebar-element">Home</p>
                    <p className="sidebar-element">Seated</p>
                    <p className="sidebar-element">Reports</p>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-9">
                    <Buttons changeComponent={this.changeComponent}/>
                    {(this.state.waitlist) ? <Waitlist /> : <AddToWaitlist changeComponent={this.changeComponent}/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar