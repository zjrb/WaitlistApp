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
import styles from "./PopUpModalElements/Modal.module.css";


const Waitlist = props => {
  const [waitlist, SetWaitlist] = useState([])
  

  useEffect(() => {
    retrieveWaitlist();
    console.log(`initializing waitlist refresh interval`);
    const interval = setInterval(() => {
      updateTime();
      retrieveWaitlist();
    }, 10000);
  
    return () => {
      console.log(`clearing waitlist refresh interval`);
      clearInterval(interval);
    };
  }, []);

  //for popup
  const [isOpen, setIsOpen] = useState(false);

  const updateTime = () => {
    console.log(new Date())
  }

  const retrieveWaitlist = () => {
    WaitlistDataService.getAll()
    .then(response => {
      SetWaitlist(response.data)
    }).catch(e => {
      console.log(e)
    })
  };

  const deleteUser = function (phone) {
    console.log(phone)
    WaitlistDataService.delete(phone)
    .then(response => {
      console.log(response.data)
      retrieveWaitlist();
    })
  }

  return (
    <div className="App">
      <div className="bigHeader">Waitlist</div>
      <table class="table ml-5">
        <thead class="thead-dark">
          <tr class="thead">
            <th className="col-md-1">#</th>
            <th className="col-md-3">Name</th>
            <th className="col-md-2">Party Size</th>
            <th className="col-md-2">Time in Queue</th>
            <th className="blueSeatText">Seat</th>
            <th className="redRemoveText">Remove</th>
          </tr>
        </thead>
        {waitlist.map((waitlist, index) => {
          return (
            <tr className="tall-row">
              <td>{waitlist.position + 1}</td>
              <td>{waitlist.name}</td>
              <td>{waitlist.partySize}</td>

              <td>{waitlist.time_in_queue}</td>
              
              <td onClick={() => deleteUser(waitlist.phone_number)}>✔</td>
              <td onClick={() => deleteUser(waitlist.phone_number)}>❌</td>
            </tr>
            )
          })}
        </table>
      </div>
  )};

export default Waitlist;