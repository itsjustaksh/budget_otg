import { React, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Home from './Home';
import Login from './Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = function(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/" element={<Login setEmail={setEmail} setLoggedIn={setLoggedIn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const Title = function (props) {
  return <h1>{props.title}</h1>;
}

export default App;
