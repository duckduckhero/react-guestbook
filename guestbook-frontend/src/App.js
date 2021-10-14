import React from 'react';
import { Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Profile from './components/Profile';
import { BrowserRouter } from 'react-router-dom';
import Messageboard from './components/Messageboard';
import TailwindTest from './components/TailwindTest';
import Nav from './components/Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() { 
    return(
        <div>
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </div>
    );  
};

export default App;