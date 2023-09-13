'use client'

import './ChatNumberInput.css'
import NewChat from './NewChat';


const ChatNumberInput = ({ joinRoomHandler, createRoomHandler }) => {

    return (
        <>
        <span>Ask your friend for a chatroom number</span>
        <div className='chatnumberinput'>
            #
            <input type="text" placeholder="00000" maxLength={5} onKeyDown={(event) => {joinRoomHandler(event)}} />
        </div>
        <NewChat createRoomHandler={createRoomHandler}/>
        </>
    );
}
 
export default ChatNumberInput;