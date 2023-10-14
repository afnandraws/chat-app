'use client'

import { useRef } from 'react';
import './ChatNumberInput.css'
import NewChat from './NewChat';


const ChatNumberInput = ({ joinRoomHandler, createRoomHandler }) => {
    const roomNumberRef = useRef();


    return (
        <>
        <span>Ask your friend for a chatroom number</span>
        <div className='chatnumberinput'>
            #
            <input ref={roomNumberRef} type="text" placeholder="00000" maxLength={5} onKeyDown={(event) => {joinRoomHandler(event)}} />
        </div>
        {/* <button onClick={() => {joinRoomHandler(roomNumberRef, true)}}>Join</button> */}
        <NewChat createRoomHandler={createRoomHandler} joinRoomHandler={joinRoomHandler} roomNumberRef={roomNumberRef}/>
        </>
    );
}
 
export default ChatNumberInput;