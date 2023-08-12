'use client'

import { useEffect, useState } from 'react';
import './ChatNumberInput.css'
import { io } from "socket.io-client";
import NewChat from './NewChat';


const ChatNumberInput = () => {
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        
        socket?.on('receive_room',(room) => {console.log(room)})
        socket?.on('hello',(message) => {console.log(message)})
        
        if (socket === null) {
            setSocket(io('ws://localhost:8080', { autoConnect: false }))
        }

        return () => socket?.disconnect();
      }, [socket])
    
    function joinRoomHandler(event) {
        if (event.key === 'Enter') {
            socket.connect()
            socket.emit('join_room', event.target.value)
        }
    }

    function createRoomHandler(event) {
        if (event.key === 'Enter') {
            let room = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            const charactersLength = characters.length;
            
            for (let i = 0; i < 5; i++) {
                room += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            
            console.log(room)
            socket.connect()
            socket.emit('create_room', event.target.value)
        }
    }

    return (
        <>
        <div className='chatnumberinput'>
            #
            <input type="text" placeholder="00000" maxLength={5} onKeyDown={joinRoomHandler} />
        </div>
        <NewChat createRoomHandler={createRoomHandler}/>
        </>
    );
}
 
export default ChatNumberInput;