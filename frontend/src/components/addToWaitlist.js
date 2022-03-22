import react from "react";
import {Switch, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import WaitlistDataService from "../services/waitlist.js"
import React from "react";

class AddToWaitlist extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      phone: "",
      size: "",
      preference: ""
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { name, phone, size, preference } = this.state;
    WaitlistDataService.AddCustomer(name, phone, size, preference)
    this.props.changeComponent(true)
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="addDiv">
          <div className="cancelThing" onClick={() => this.props.changeComponent(true)}>✖</div>
          <h3 className="addFormHeader">Add a Party to the waitlist.</h3>
          <form className="flexForm">
            <span className="inputLabel">Name</span>
            <input type="text" placeholder="Kyle" name="name" className="fullWidthInput" onChange={this.onChange}/><br/>
            <span className="inputLabel">Phone</span>
            <input type="text" placeholder="775-247-1257" name="phone" className="fullWidthInput" onChange={this.onChange}/><br/>
            <span className="inputLabel">Size</span>
            <input type="text" placeholder="6" name="size" className="fullWidthInput" onChange={this.onChange}/><br/>
            <span className="inputLabel">Seating Preference</span>
            <input type="text" placeholder="Bar" name="preference" className="fullWidthInput" onChange={this.onChange}/><br/>
            <div className="btn btn-primary flexbtn" onClick={this.onSubmit}>Submit</div>
          </form>
      </div>
    );
  }
}

export default AddToWaitlist;