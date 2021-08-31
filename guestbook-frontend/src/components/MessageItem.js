import React from 'react'; 

function MessageItem({username, message, date}) {
    return (
        <div>
            <h5>name : {username}</h5>
            <h5>message : {message} </h5>
            <h5>date : {date}</h5>
        </div>
    );
}

export default MessageItem;