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

function About(){
    return(
        <div>
            <Profile />
            <Statement>
                Hi! My name is Deokhaeng Lee, and I am a freshman at Duke University studyng Computer Science!

                <br></br><br></br>
                This is my messageboard created by React + NodeJS. Feel free to leave messages! Also, If you want to chat with me 
                about anything, visit the Contacts page and reach out to me!
            </Statement>
        </div>
        
    );
};

export default About;