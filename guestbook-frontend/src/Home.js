import React from 'react';
import { Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Profile from './components/Profile';
import { BrowserRouter } from 'react-router-dom';
import Messageboard from './components/Messageboard';
import TailwindTest from './components/TailwindTest';
import Nav from './components/Nav';

function Home() {
    return(
        <div>
            <Profile />
            <Messageboard />
        </div>
    );  
}

export default Home;