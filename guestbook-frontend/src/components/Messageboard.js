import React from 'react';
import './Messageboard.css'
import MessageList from './MessageList';

function Messageboard() {
    return(
        <div className="messageBoard">
            <div className="messageBox">  
                <input placeholder="name"/>
                <input placeholder="message"/>
                <button>submit</button>
            </div>
            <MessageList />
        </div>
    );
}

export default Messageboard;