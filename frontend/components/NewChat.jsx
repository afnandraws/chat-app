import './NewChat.css'

const NewChat = ({ createRoomHandler }) => {
    return (
        <div className='newchat'>
        <input onKeyDown={(event) => {createRoomHandler(event)}} type="text" placeholder="Or type to start a new chat!" />
        <button onClick={(event) => {createRoomHandler(event)}}>send</button>
        </div>
    );
}
 
export default NewChat;