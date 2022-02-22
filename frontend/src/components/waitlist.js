import React, { useState, useEffect } from "react";
import {Routes, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import WaitlistDataService from "../services/waitlist.js"
import waitlist from "../services/waitlist.js";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


debugger
const Waitlist = props => {
  const [waitlist, SetWaitlist] = useState([])

  useEffect(() => {
    retrieveWaitlist();
  }, []);

  const retrieveWaitlist = () => {
    WaitlistDataService.getAll()
    .then(response => {
      console.log(response.data)
      SetWaitlist(response.data.waitlist)
    }).catch(e => {
      console.log(e)
    })
  };

  return (
    <div className="App">
      <table class="table ml-5 myTable">
        <thead class="thead-dark">
          <tr class="thead">
            <th className="col-md-3">Guest Name</th>
            <th className="col-md-1">Party Size</th>
            <th className="col-md-1">Time Waiting</th>
            <th className="col-md-1">Quoted Wait Time</th>
            <th className="col-md-1">Number</th>
            <th className="col-md-3">Status</th>
            <th className="col-md-2">Send Message</th>
          </tr>
        </thead>
        {waitlist.map((waitlist) => {
          return (
            <tr>
              <td>{waitlist.name}</td>
              <td>{waitlist.size}</td>
              <td>{waitlist.waitingTime}</td>
              <td>{waitlist.quotedTime}</td>
              <td>{waitlist.numberInLine}</td>
              <td>{waitlist.status}</td>
              <td><div><Popup trigger={<button>Message</button>} 
                position="left center">
                  <div>Send a Message</div><br />
                  <button>Table Ready</button><br /><br />
                  <button>5 Minutes</button><br /><br />
                  <button>Custom Message</button></Popup>
              </div></td>
            </tr>
          )
        })}
      </table>
    </div>
  )};

export default Waitlist;