"use client"

import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const ChatNumberInput = React.lazy(() => import("./ChatNumberInput"));
import ChatWindow from './ChatWindow'

let room = '';

const SocketContainer = () => {
    const [socket, setSocket] = useState(null)
    const [joinedRoom, setJoinedRoom] = useState(false)

    useEffect(() => {
        
        socket?.on('send_room',(room) => {
            console.log(room.room);
            localStorage.setItem("room", room.room) //this stores the pageID in the localStorage
            setJoinedRoom(true)
        })
        
        if (socket === null) {
            setSocket(io('ws://localhost:8080', { autoConnect: false }))
        }

        return () => {
            socket?.disconnect()
            localStorage.removeItem('room')
        };
      }, [socket])

    
    function joinRoomHandler(event) {
        if (event.key === 'Enter') {
            socket.connect()
            socket.emit('join_room', event.target.value)
        }
    }

    function createRoomHandler(event) {
        if (event.key === 'Enter') {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            const charactersLength = characters.length;
            
            for (let i = 0; i < 5; i++) {
                room += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            localStorage.setItem("room", room)
            socket.connect() //might not need to connect in this component
            socket.emit('create_room', room)
        }
    }

    
    return (
        <>
        {!joinedRoom && <ChatNumberInput joinRoomHandler={joinRoomHandler} createRoomHandler={createRoomHandler}/>}
        {joinedRoom && <ChatWindow socket={socket}/>}
        </>
    )
}
 
export default SocketContainer;