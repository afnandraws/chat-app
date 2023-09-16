import './ChatWindow.css'
import sendImage from '../public/send.svg'
import userImage from '../public/users.svg'
import Image from 'next/image';

import { useEffect, useMemo, useRef, useState } from 'react';

import db from '../indexeddb/db'
import { useLiveQuery } from 'dexie-react-hooks';


const now = Date.now();

const oneMinsAgo = new Date(now - (1 * 60 * 1000)).toLocaleTimeString();
const fiveMinsAgo = new Date(now - (5 * 60 * 1000)).toLocaleTimeString();
const twoHoursAgo = new Date(now - (2 * 60 * 60 * 1000)).toLocaleTimeString();

const ChatWindow = ({ socket, userID, username, firstMessage, userList }) => {
    const [messages, setMessages] = useState([])
    const [currentMessage, setCurrentMessage] = useState('')
    const [openUserList, setOpenUserList] = useState(false)
    
    const room = localStorage.getItem('room');
    const messageRef = useRef()



    // const pastMessages = useLiveQuery(
    //         () => db.messages
    //         .where("time").above(fiveMinsAgo)
    //         .and(message => message.room === room)    
    //         .toArray());
    
        // if (pastMessages) {
        //     for (const item of pastMessages) {
        //         if (item.username === username) {
        //             console.log(item)
        //         } else {
        //         }
        //         // setMessages([...messages, {message: currentMessage, room: room, time: new Date().toLocaleTimeString('en-UK', {hour: '2-digit', minute: '2-digit'}), username: username}])
        //         // socket.emit('send_message', {message: currentMessage, room: room, username: username})
        //     };
        //     console.log(pastMessages);
        // }

    //this will get all messages sent in the last 5 minutes from past sessions with the same username



    async function messageHandler(event) {
        if (event.key === 'Enter' && currentMessage || event.type === 'click' && currentMessage) {
            setMessages([...messages, {message: currentMessage, room: room, time: new Date().toLocaleTimeString('en-UK', {hour: '2-digit', minute: '2-digit'}), username: username}])
            socket.emit('send_message', {message: currentMessage, room: room, username: username})
            setCurrentMessage('')

            await db.messages.add({
                room: room, 
                socketID    : userID, 
                message: currentMessage, 
                time: new Date().toLocaleTimeString('en-UK', {hour: '2-digit', minute: '2-digit'}),
                username: username
              });
        }
    }

    useEffect(() => {
        socket?.on('receive_message',(object) => { 
            setMessages(prev => [...prev, object])
        })

        socket?.on('sent_message',(message) => {console.log(message)})
        
        return () => {socket?.disconnect()};
    }, [socket])
    
    useEffect(() => {
        messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }, [messages])

    useEffect(() => {
        if (firstMessage) {
            setMessages([...messages, {message: firstMessage, room: room, time: new Date().toLocaleTimeString('en-UK', {hour: '2-digit', minute: '2-digit'}), username: username}])
            socket.emit('send_message', {message: firstMessage, room: room, username: username})
        }

        async function deletePastMessages() {
            await db.messages
            .where("time").below(fiveMinsAgo)
            .delete()
            .then(function (deleteCount) {
                console.log( "Deleted " + deleteCount + " objects"); //this deletes items that are 5 minutes old
            })};

        async function getPastMessages() {
            const pastMessages = await db.messages
                .where("time").above(fiveMinsAgo)
                .and(message => message.room === room)    
                .toArray();
        
            if (pastMessages) {
                for (const item of pastMessages) {
                    if (item.username === username) {
                        console.log(item)
                    } else {
                    }
                    // setMessages([...messages, {message: currentMessage, room: room, time: new Date().toLocaleTimeString('en-UK', {hour: '2-digit', minute: '2-digit'}), username: username}])
                    // socket.emit('send_message', {message: currentMessage, room: room, username: username})
                };
                console.log(pastMessages);
            }
        }

        getPastMessages()
        deletePastMessages()
    }, [])
    
    

    return (
        <div className='chatcontainer'>
                {/* Need to make a showUsers thing and style the chat header */}
            <div className='chatheader'>
                <span>#{room}</span>
                <button onClick={() => {setOpenUserList(!openUserList)}}><Image alt='users' src={userImage} height={30}/></button>
            </div>
            {openUserList ? <div className='userlist'>{userList.map((user) => {
                <span>{user}</span>
            })}</div> : ''}
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