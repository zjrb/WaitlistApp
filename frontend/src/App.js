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
      <div className="sidenav">
        <a href="#" className="selectedTab">Waitlist</a>
        <a href="#">Seated Guests</a>
        <a href="#">Tables</a>
        <a href="#">Insights</a>
      </div>
      <div>
  </div>
      <nav className="navbar navbar-expand navbar-dark bg-dark header nav-right">
        <a href="/login" className="navbar-brand ml-4">Bombay House</a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item nav-item-right">
            { user ? (
              <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
                Logout {user.name}
              </a>
            ) : (
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            )}
          </li>
        </div>
      </nav>

      <div className="container mt-3">
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
