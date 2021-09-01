import React, { useState, useEffect } from 'react'; 
import MessageItem from './MessageItem';
import { set } from 'harmony-reflect';

function MessageList({loading, error, messages}) {
    
    if(loading) return(<div>로딩 중...</div>);
    if(error) return(<div>에러 발생...</div>);
    if(!messages) return(null); 
    return(
        <div>
            {messages.data.map(message => (
                <MessageItem username={message.username} message={message.message} date={message.date} key={message.message_id}/>
            ))}
        </div>
    )
}

export default MessageList; 