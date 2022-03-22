import react from "react";
import {Switch, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from "./sidebar";


function AboutUs() {
  return (
      <div>
           <div className="customCon mt-3 pageMain">
                <div className="row">
                    <div className="col-2 flex-col">
                    <div className="btn btn-primary btn-purple sidebar-element">Bombay House</div>
                    <p className="sidebar-element" >About us</p>
                    <p className="sidebar-element">Home</p>
                    <p className="sidebar-element">Seated</p>
                    <p className="sidebar-element">Reports</p>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-9">
                    </div>
                </div>
            </div>

            <div>ZipThru changes the restaurant industry by empowering restaurants to give diners more transparency and better accuracy with waitlist times.
              <br />
              We offer restaurants a waitlist management system that allows hosts to:
              <ul>
                <li>quickly add quests to a list</li>
                <li>track wait times</li>
                <li>handle rush hour chaos</li>
              </ul>
              <br /><br /><br /><br /><br />
              Special thank you to the Rollins Center for Entrepreneurship and Technology for the opportunity to present our app.

            </div>
            <img src="Rollins_ink_rgb.svg" />

        </div>
);
}

export default AboutUs;