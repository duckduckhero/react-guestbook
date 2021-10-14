import React from 'react';
import { Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Profile from './components/Profile';
import { BrowserRouter } from 'react-router-dom';
import Messageboard from './components/Messageboard';
import TailwindTest from './components/TailwindTest';
import Nav from './components/Nav';
import Statement from './components/Statement';

function Contact(){
    return(
        <div>
            <Profile />
            <Statement>
                📱 Phone: (919) 884 0026
                <br></br>
                📧 Email : deokhaeng.lee@duke.edu
                <br></br>
                🐦 Twitter : @duckduckhero 
                <br></br>
                🔥 Github : @jefflee0127 
            </Statement>
        </div>
        
        
    );
};

export default Contact;