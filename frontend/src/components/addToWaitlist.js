import react from "react";
import {Switch, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

function AddToWaitlist() {
  async function expand() {
    document.getElementById("sideDrawar").style.width = "400px";
  }
  async function collapse() {
    document.getElementById("sideDrawar").style.width = "0px";
  }
  async function submit() {
    
  }
  return (
    <div>
        <h4>Add a Party to the waitlist.</h4>
        <form className="flexForm">
          Name
          <input type="text" placeholder="Kyle" className="fullWidthInput"/><br/>
          Phone
          <input type="text" placeholder="775-247-1257" className="fullWidthInput"/><br/>
          Size
          <input type="text" placeholder="6" className="fullWidthInput"/><br/>
          Seating Preference
          <input type="text" placeholder="Bar" className="fullWidthInput"/><br/>
          <div className="btn btn-primary flexbtn" onClick={submit}>Submit</div>
          <div className="btn btn-warning flexbtn" onClick={collapse}>Cancel</div>
        </form>
    </div>
  );
}

export default AddToWaitlist;