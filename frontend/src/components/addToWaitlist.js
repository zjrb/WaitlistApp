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
  return (
    <div>
      <div className="btn btn-primary btn-zindex" onClick={expand}>+</div>
      <div className="drawar" id="sideDrawar">
        <form>
        Name
          <input type="text" placeholder="Kyle"/><br/>
          Phone
          <input type="text" placeholder="775-247-1257"/><br/>
          Size
          <input type="text" placeholder="6"/><br/>
          Seating Preference
          <input type="text" placeholder="Bar"/><br/>
          <div className="btn btn-warning" onClick={collapse}>Cancel</div>
        </form>
      </div>
    </div>
  );
}

export default AddToWaitlist;