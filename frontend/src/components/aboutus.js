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
                    <div className="btn-purple sidebar-element header-element">ZipThru<img src={process.env.PUBLIC_URL + "/favicon.ico"}></img></div>
                    <p className="sidebar-element"><a href="/">Home</a></p>
                    <p className="sidebar-element sidebar-element-active" >About us</p>
                    
                    </div>
                    <div className="col-1"></div>
                    <div className="col-9">
                      <div className="flex-about-container">
                        <div className="bigtitle">
                          <strong className="biggerTitle">ZipThru</strong> changes the restaurant industry 
                          by empowering restaurants to give diners more transparency and better accuracy with waitlist times. 
                          
                        </div>
                        <div className="about-container-item">
                          We offer restaurants a waitlist management system that allows hosts to:
                        </div>
                        <ul className="ulcustom about-container-item">
                          <li>quickly add quests to a list</li>
                          <li>track wait times</li>
                          <li>handle rush hour chaos</li>
                        </ul>
                        <div className="about-container-item">
                          Special thank you to the Rollins Center for Entrepreneurship and Technology for the opportunity to present our app.
                        </div>
                        <div className="about-container-item">
                          <img src="Rollins_ink_rgb.svg" className="smallerLogo" />
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
);
}

export default AboutUs;