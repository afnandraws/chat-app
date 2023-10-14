import styles from './NewChat.module.css'

const NewChat = ({ createRoomHandler, joinRoomHandler, roomNumberRef }) => {
    return (
        <div className={styles.newchat}>
        <button style= {{backgroundColor: '#fbfcff', color: '#567AF4'}} onClick={() => {joinRoomHandler(roomNumberRef, true)}}>join a room</button>
        <button onClick={(event) => {createRoomHandler(event)}}>create room</button>
        </div>
    );
}
 
export default NewChat;