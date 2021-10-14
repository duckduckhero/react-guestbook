import React, { useRef, useState, useEffect } from 'react';
import MessageList from './MessageList';
import axios from 'axios';

function Messageboard() {

    const [messages, setMessages] = useState(null);
    const [loading, setLoading] = useState(null); 
    const [error, setError] = useState(null);

    const nameInput = useRef();
    const messageInput = useRef(); 

   

    //메시지 불러오기 위한 함수 
    const getMessages = async () => {
        try{
        
            setError(null);
            setMessages(null);

            setLoading(true);
            const response = await axios.get('http://localhost:80/message/read');
            setMessages(response.data);


        } catch(e) {
            console.log("에러 발생 : " +e);
            setError(e);
        }
        setLoading(false);
    };

    //submit 버튼 눌렸을 때 일어나는 것들 처리 
    const addMessages = async () => {
        console.log("버튼이 눌렸습니다");

        
        axios.post('http://localhost:80/message/add', {
            username : nameInput.current.value, 
            message : messageInput.current.value
        }).then((response) => { //정상적으로 메시지 등록이 되었을 때 
            console.log(response);
            getMessages();
        }).catch((error) => {
            console.log(error);
        })
        

        
    }

    useEffect(() => {
        getMessages();
    }, []);

    
    return(
        <div className="messageBoard" class="bg-white rounded-xl max-w-xl mx-auto shadow p-6 my-9"> 
            <div className="messageBox flex">  
                <input class="flex-shrink-0 mr-9" placeholder="name" ref={nameInput}/>
                <input class="flex-shrink-0 mr-9" placeholder="message" ref={messageInput}/>
                <button onClick={addMessages} class="bg-blue-500 hover:bg-blue-700 text-white font-light py-2 px-4 rounded">
                    Submit
                </button>
            </div>
            <br></br>
            <MessageList error={error} loading={loading} messages={messages}/>
        </div>
    );
}

export default Messageboard;