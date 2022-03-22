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
  }, []);

  //for popup
  const [isOpen, setIsOpen] = useState(false);

  const retrieveWaitlist = () => {
    WaitlistDataService.getAll()
    .then(response => {
      console.log(response.data)
      SetWaitlist(response.data)
    }).catch(e => {
      console.log(e)
    })
  };

  return (
    <div className="App">
      <div className="bigHeader">Waitlist</div>
      <table class="table ml-5">
        <thead class="thead-dark">
          <tr class="thead">
            <th className="col-md-1">#</th>
            <th className="col-md-3">Name</th>
            <th className="col-md-1">Party Size</th>
            <th className="col-md-1">Time in Queue</th>
            <th className="col-md-1">Alert</th>
            <th className="col-md-2">Last Text</th>
            <th className="blueSeatText">Seat</th>
            <th className="redRemoveText">Remove</th>
          </tr>
        </thead>
        {waitlist.map((waitlist, index) => {
          return (
            <tr className="tall-row">
              <td>{waitlist.position}</td>
              <td>{waitlist.name}</td>
              <td>{waitlist.partySize}</td>
              <td>{waitlist.waitingTime}</td>
              
              <td><div><Popup trigger={<button className=" btn btn-primary">Send Text</button>} 
                position="left center">
                  <div className="blackText">Send a Message</div><br />
                  <button className={styles.regBtn} onClick={TableReadyMessage}>Table Ready</button><br /><br />
                  <button className={styles.regBtn}>5 Minutes</button><br /><br />
                  <button className={styles.regBtn} onClick={() => setIsOpen(true)}>Custom Message</button>{isOpen && <Modal setIsOpen={setIsOpen} />}
                  </Popup>
              </div></td>

              <td>{waitlist.status}</td>
              <td>✔</td>
              <td>❌</td>
            </tr>
            )
          })}
        </table>
      </div>
  )};

export default Waitlist;