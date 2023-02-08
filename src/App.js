import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Alert from './component/Alert';
import TextForm from './component/TextForm';
import About from './component/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');  //whether dark mode enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#495057'
      showAlert("DArk mode has been enabled", "success")
      // document.title = "text-utilis Dark Mode"

    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      // document.title = "text-utilis - App"
    }
  }

  return (
    <>
    <Router>
    
      <Navbar title="TextUtilis" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About mode={mode} />}></Route>
          
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Try Text-Utils - word counter,copy text, character counter, rempve extra spaces, lowercase to uppercase, uppercase to lowercase' mode={mode} />}></Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
