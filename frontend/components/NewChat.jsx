import styles from './NewChat.module.css'

const NewChat = ({ createRoomHandler, joinRoomHandler, roomNumberRef }) => {
    return (
        <div className={styles.newchat}>
        <button onClick={() => {joinRoomHandler(roomNumberRef)}}>join a room</button>
        <button onClick={(event) => {createRoomHandler(event)}}>create room</button>
        {/* <input onKeyDown={(event) => {createRoomHandler(event)}} type="text" placeholder="Or type to start a new chat!" /> */}
        </div>
    );
}
 
export default NewChat;