import React, {useState} from "react";
import {Routes, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Waitlist from "./components/waitlist";
import AddToWaitlist from "./components/addToWaitlist";
import Login from "./components/login";

debugger
function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  }
  return (
    <div className="App">
      <AddToWaitlist/>
      <nav className="navbar navbar-invisible">
        <div className="flex-nav">
          <a href="/login" className="navbar-brand ml-4 big-nav">Bombay House</a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item nav-item-right">
              { user ? (
                <a onClick={logout} className="nav-link med-nav" style={{cursor:'pointer'}}>
                  Logout {user.name}
                </a>
              ) : (
                <Link to={"/login"} className="nav-link med-nav">
                  Login
                </Link>
              )}
            </li>
          </div>
        </div>
        <div className="subNav">
          <p className="subNav-item">Current</p>
          <p className="subNav-item">Seating</p>
          <p className="subNav-item">Reports</p>
        </div>
        <div className="subNav">
          <hr className="activeTabLine"></hr>
        </div>
        <hr></hr>
      </nav>

      <div className="customCon mt-3 pageMain">
        <Routes>
          <Route path="/" element={<Waitlist/>} />
          
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
