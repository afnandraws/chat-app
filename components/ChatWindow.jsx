import './ChatWindow.css'
import send from '../public/send.svg'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import db from '../indexeddb/db'
import { useLiveQuery } from 'dexie-react-hooks';

const ChatWindow = ({ socket, users, userID }) => {
    const messageRef = useRef()
    const [messages, setMessages] = useState([])
    const [currentMessage, setCurrentMessage] = useState('')


    const now = Date.now();
    const twoHoursAgo = new Date(now - (2 * 60 * 60 * 1000)).toLocaleTimeString();
    const fiveMinsAgo = new Date(now - (5 * 60 * 1000)).toLocaleTimeString();

    const temp = useLiveQuery(
        () => db.messages
        .where("time").above(fiveMinsAgo)
        .toArray()
      );

    console.log(temp)


    const room = localStorage.getItem('room');

    async function messageHandler(event) {
        if (event.key === 'Enter') {
            setMessages([...messages, {message: currentMessage, room: room, time: new Date().toLocaleTimeString('en-UK', {hour: '2-digit', minute: '2-digit',})}])
            socket.emit('send_message', {message: currentMessage, room: room})

            const id = await db.messages.add({
                room: room, 
                userID: userID, 
                message: currentMessage, 
                time: new Date().toLocaleTimeString('en-UK', {hour: '2-digit', minute: '2-digit',}),
              });
              console.log(id)
        }
    }

    useEffect(() => {
        socket?.on('receive_message',(object) => { 
            console.log(object);
            setMessages(prev => [...prev, object])
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
                {/* Need to make a showUsers thing and style the chat header */}
            <div className='chatheader'>
                <span>{room}</span>
                <button>{users}</button>
            </div>
            <div className='chatmessages' ref={messageRef}>
            {messages?.map((object, index) => (
                <div key={index} className={object.creator ? "sentmessage" : "message"}>
                    <div>{object.message}</div>
                    <span>{object.time}</span>
                </div>
            ))}
            </div>
            <div className='chatfooter'>
                <input type="text" onKeyDown={messageHandler} value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)} />
                <button><Image alt='send' src={send} height={25}/></button>
            </div>
        </div>
    );
}
 
export default ChatWindow;