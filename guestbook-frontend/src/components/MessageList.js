import React, { useState, useEffect } from 'react'; 
import MessageItem from './MessageItem';
import axios from 'axios';
import { set } from 'harmony-reflect';

function MessageList() {
    const [messages, setMessages] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        const getMessages = async () => {
            try{
            
                setError(null);
                setMessages(null);

                setLoading(true);
                const response = await axios.get('localhost:80/message/read');
                setMessages(response.data);

            } catch(e) {
                console.log("에러 발생 : " +e);
                setError(e);
            }
            setLoading(false);
        };

        getMessages();

    }, []);

    if(loading) return(<div>로딩 중...</div>);
    if(error) return(<div>에러 발생...</div>);
    if(!messages) return(null); 
    return(
        <div>
            {messages}
        </div>
    )
}

export default MessageList; 