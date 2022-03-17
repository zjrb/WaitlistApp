import react from "react";
import {Switch, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

function AddToWaitlist(props) {
  async function submit() {
    
  }
  return (
    <div className="addDiv">
        <div className="cancelThing" onClick={() => props.changeComponent(true)}>✖</div>
        <h3 className="addFormHeader">Add a Party to the waitlist.</h3>
        <form className="flexForm">
          <span className="inputLabel">Name</span>
          <input type="text" placeholder="Kyle" className="fullWidthInput"/><br/>
          <span className="inputLabel">Phone</span>
          <input type="text" placeholder="775-247-1257" className="fullWidthInput"/><br/>
          <span className="inputLabel">Size</span>
          <input type="text" placeholder="6" className="fullWidthInput"/><br/>
          <span className="inputLabel">Seating Preference</span>
          <input type="text" placeholder="Bar" className="fullWidthInput"/><br/>
          <div className="btn btn-primary flexbtn" onClick={submit}>Submit</div>
        </form>
    </div>
  );
}

export default AddToWaitlist;