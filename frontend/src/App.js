import React, {Fragment, useState} from "react";
import {Routes, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Waitlist from "./components/waitlist";
import AddToWaitlist from "./components/addToWaitlist";
import Login from "./components/login";
import Buttons from "./components/buttons";
import CustomerPortal from "./components/customerportal";
import Sidebar from "./components/sidebar";


function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  }
  const state={
    waitlist:true,
  }
  return (
    <div className="App">      
      <div >

        <Routes>  
          <Route
            exact
            path="/list"
            element={<CustomerPortal/>}
          />     
          <Route 
            exact
            path="/"
            element={<Sidebar/>}
          />   
          <Route 
            path="/login"
            render={(props) => (
              <Login {...props} login={login} />
            )}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
