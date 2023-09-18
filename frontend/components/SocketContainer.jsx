import './SocketContainer.css'

import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const ChatNumberInput = React.lazy(() => import("./ChatNumberInput"));
import ChatWindow from './ChatWindow'

let userID = '';
let room = ''; //contains the room which is then stored in localStorage

const SocketContainer = () => {
    const [socket, setSocket] = useState(null)
    const [joinedRoom, setJoinedRoom] = useState(false)
    const [username, setUsername] = useState('')
    const [firstMessage, setFirstMessage] = useState(undefined)
    
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    
    const [userList, setUserList] = useState([])

    useEffect(() => {
        //need an undefined_room handler

        socket?.on("new_join", users => {
            console.log(users)
            setUserList(users)
        })

        socket?.on('send_room',(room) => {
            localStorage.setItem("room", room.room) //this stores the roomID in the localStorage
            setLoading(false)
            setJoinedRoom(true)
        })

        socket?.on('undefined_room', () => {
            setLoading(false)
        })
        
        socket?.on('initial_connection', (id) => {userID = id; console.log(userID)})

        if (socket === null) {
            // setSocket(io('https://chat-app-r3il.onrender.com', { autoConnect: false }))
            setSocket(io('http://localhost:8080', { autoConnect: false }))
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
            socket.emit('join_room', {room: event.target.value, username: username})
            setLoading(true)
        }
    }

    function createRoomHandler(event) {
        if (event.key === 'Enter' || event.target.type === 'submit') {
            if (!username) {setError(true); return};
            room = ''
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            const charactersLength = characters.length;
            
            for (let i = 0; i < 5; i++) {
                room += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            console.log(room)
            localStorage.setItem("room", room)
            setLoading(true)
            socket.connect() //might not need to connect in this component
            socket.emit('create_room', room)
            socket.emit("join_room", {room: room, username: username})
            setFirstMessage(event.target.value)
        }
    }

    useEffect(() => {
      console.log(userList)
    }, [userList])
    
    
    return (
        <>

        {!joinedRoom && 
        <>
        <span className='error'>{error ? 'You have not entered a username' : '‎'}</span>
        <input placeholder='Enter your username' style={error ? { border: '2px solid red', outline: 'none' } : {}} className='username' type="text" value={username} onChange={(event) => {setUsername(event.target.value); error && setError(false)}}/>
        <ChatNumberInput joinRoomHandler={joinRoomHandler} createRoomHandler={createRoomHandler}/>
        {loading && <span className={'loading'}>Connection is being established. First time connections may take a bit longer.</span>}
        </>
        }
        {joinedRoom && <ChatWindow socket={socket} userID={userID} username={username} firstMessage={firstMessage} userList={userList}/>}
        </>
    )
}
 
export default SocketContainer;