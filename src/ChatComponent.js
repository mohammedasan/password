// ChatComponent.js

import React, { useState } from 'react';
import axios from 'axios';

const ChatComponent = () => {
    const [userInput, setUserInput] = useState('');
    const [chatResponse, setChatResponse] = useState('');

    const sendMessage = async () => {
        
    };

    return (
        <div>
            <h1>ADA*******</h1>
            <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your message here..."
            />
            <button onClick={sendMessage}>Send</button>
            {chatResponse && (
                <div className='msg'>
                    <h1>{sendMessage}</h1>
                    <strong>You:</strong> {userInput}<br />
                    <strong>ChatGPT:</strong> {chatResponse}
                    <h1>{chatResponse}</h1>
                </div>
            )}
        </div>
    );
};

export default ChatComponent;
