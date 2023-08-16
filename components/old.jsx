'use client'

import { useEffect, useState } from 'react';
import './ChatNumberInput.css'
import { io } from "socket.io-client";
import NewChat from './NewChat';
import { useRouter } from 'next/navigation';


const ChatNumberInput = () => {
    const [socket, setSocket] = useState(null)
    const router = useRouter()

    useEffect(() => {
        
        socket?.on('send_room',(room) => {
            console.log(room.room);
            localStorage.setItem("room", room.room) //this stores the pageID in the localStorage
            router.push(`/${room.room}`) //this will route to the dynamic page of the chat
        })

        socket?.on('hello',(message) => {console.log(message)})
        
        if (socket === null) {
            setSocket(io('ws://localhost:8080', { autoConnect: false }))
        }

        return () => {
            socket?.disconnect();
        };
      }, [router, socket])
    
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
            
            socket.connect() //might not need to connect in this component
            socket.emit('create_room', room)
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