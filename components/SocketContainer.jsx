"use client"

import './SocketContainer.css'

import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const ChatNumberInput = React.lazy(() => import("./ChatNumberInput"));
import ChatWindow from './ChatWindow'

let userID = '';
let users = []

const SocketContainer = () => {
    const [socket, setSocket] = useState(null)
    const [joinedRoom, setJoinedRoom] = useState(false)
    const [username, setUsername] = useState('')
    const [error, setError] = useState(false)
    let room = ''; //contains the room which is then stored in localStorage
    
    useEffect(() => {
        
        socket?.on('send_room',(room) => {
            users = room.users;
            localStorage.setItem("room", room.room) //this stores the roomID in the localStorage
            setJoinedRoom(true)
        })
        
        socket?.on('initial_connection', (id) => {userID = id; console.log(userID)})

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
            if (!username) {setError(true); return};
            socket.connect()
            socket.emit('join_room', event.target.value)
        }
    }

    function createRoomHandler(event) {
        if (event.key === 'Enter') {
            if (!username) {setError(true); return};
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            const charactersLength = characters.length;
            
            for (let i = 0; i < 5; i++) {
                room += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            localStorage.setItem("room", room)
            socket.connect() //might not need to connect in this component
            socket.emit('create_room', room)
            socket.emit('join_room', room)

        }
    }

    
    return (
        <>

        {!joinedRoom && 
        <>
        <span className='error'>{error ? 'You have not entered a username' : '‎'}</span>
        <input placeholder='Enter your username' style={error ? { border: '2px solid red', outline: 'none' } : {}} className='username' type="text" value={username} onChange={(event) => {setUsername(event.target.value); error && setError(false)}}/>
        <ChatNumberInput joinRoomHandler={joinRoomHandler} createRoomHandler={createRoomHandler}/>
        </>
        }
        {joinedRoom && <ChatWindow users={users} socket={socket} userID={userID} username={username}/>}
        </>
    )
}
 
export default SocketContainer;