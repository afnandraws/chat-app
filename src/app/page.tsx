import styles from "./page.module.css";

import ChatNumberInput from "../../components/ChatNumberInput";
import NewChat from "../../components/NewChat";

export default function Home() {
	return (
		<main className={styles.main}>
			<span>Ask your friend for a chatroom number</span>
			<ChatNumberInput />
		</main>
	);
}
