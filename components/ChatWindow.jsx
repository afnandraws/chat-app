import './ChatWindow.css'
import sendImage from '../public/send.svg'
import userImage from '../public/users.svg'
import Image from 'next/image';

import { useEffect, useRef, useState } from 'react';

import db from '../indexeddb/db'
import { useLiveQuery } from 'dexie-react-hooks';

const ChatWindow = ({ socket, users, userID, username }) => {
    const messageRef = useRef()
    const [messages, setMessages] = useState([])
    const [currentMessage, setCurrentMessage] = useState('')


    // need to move this to it's own function

    const now = Date.now();
    const twoHoursAgo = new Date(now - (2 * 60 * 60 * 1000)).toLocaleTimeString();
    const fiveMinsAgo = new Date(now - (5 * 60 * 1000)).toLocaleTimeString();

    const temp = useLiveQuery(
        () => db.messages
        .where("time").above(fiveMinsAgo)
        .toArray()
      );

      //this will get all messages sent in the last 5 minutes from past sessions

    console.log(temp)


    const room = localStorage.getItem('room');

    async function messageHandler(event) {
        if (event.key === 'Enter' && currentMessage || event.type === 'click' && currentMessage) {
            setMessages([...messages, {message: currentMessage, room: room, time: new Date().toLocaleTimeString('en-UK', {hour: '2-digit', minute: '2-digit'}), username: username}])
            socket.emit('send_message', {message: currentMessage, room: room, username: username})
            setCurrentMessage('')
            // const id = await db.messages.add({
            //     room: room, 
            //     userID: userID, 
            //     message: currentMessage, 
            //     time: new Date().toLocaleTimeString('en-UK', {hour: '2-digit', minute: '2-digit'}),
            //     username: username
            //   });
            //   console.log(id)
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
                <span>#{room}</span>
                <button><Image alt='users' src={userImage} height={30}/></button>
            </div>
            <div className='chatmessages' ref={messageRef}>
            {messages?.map((object, index) => (
                <div key={index} className={object.username === username ? "message" : "sentmessage"}>
                    <div>{object.message}</div>
                    <span>{object.time} : {object.username === username ? 'Me' : object.username } </span>
                </div>
            ))}
            </div>
            <div className='chatfooter'>
                <input type="text" onKeyDown={messageHandler} value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)} />
                <button onClick={messageHandler}><Image alt='send' src={sendImage} height={25}/></button>
            </div>
        </div>
    );
}
 
export default ChatWindow;