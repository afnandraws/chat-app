"use client";
import styles from "./page.module.css";
import SocketContainer from "../../components/SocketContainer";

export default function Home() {
	return (
		<main className={styles.main}>
			<SocketContainer />
		</main>
	);
}
