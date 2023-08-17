import './ChatWindow.css'
import send from '../public/send.svg'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';


const ChatWindow = ({ socket }) => {
    const messageRef = useRef()
    const [messages, setMessages] = useState([])
    const [currentMessage, setCurrentMessage] = useState('')
    const room = localStorage.getItem('room');

    function messageHandler(event) {
        if (event.key === 'Enter') {
            setMessages([...messages, {message: currentMessage, room: room}])
            socket.emit('send_message', {message: currentMessage, room: room})

        }
    }

    useEffect(() => {
        socket?.on('receive_message',(object) => {
            console.log(object);
            setMessages(prev => [...prev, object.message])
        })
        socket?.on('sent_message',(message) => {console.log(message)})
        
        return () => {socket?.disconnect()};
    }, [socket])
    
    useEffect(() => {
        console.log(messages)
        messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }, [messages])
    

    return (
        <div className='chatcontainer'>
            <div className='chatheader'>
                <span>{room}</span>
                <button>Users</button>
            </div>
            <div className='chatmessages' ref={messageRef}>
            {messages?.map((message, index) => (
                <div key={index} className="message">
                    <div>{message.message}</div>
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