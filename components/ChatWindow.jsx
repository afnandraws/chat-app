import './ChatWindow.css'
import send from '../public/send.svg'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const ChatWindow = ( {room} ) => {
    const messageRef = useRef()
    const [messages, setMessages] = useState([])
    const [currentMessage, setCurrentMessage] = useState('')


    function messageHandler(event) {
        if (event.key === 'Enter') {
            setMessages([...messages, currentMessage])
        }
    }

    useEffect(() => {
        messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }, [messages])
    

    return (
        <div className='chatcontainer'>
            <div className='chatheader'>
                <span>{room}</span>
                <button>Users</button>
            </div>
            <div className='chatmessages' ref={messageRef}>
            {messages?.map(message => (
                <div key={message} className="message">
                    <div>{message}</div>
                </div>
            ))}
            <div className="sentmessage">
                    <div>aooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo</div>
                </div>
            </div>
            <div className='chatfooter'>
                <input type="text" onKeyDown={messageHandler} onChange={(e) => setCurrentMessage(e.target.value)} />
                <button><Image alt='send' src={send} height={25}/></button>
            </div>
        </div>
    );
}
 
export default ChatWindow;