import React from "react";
import styles from "./card.module.css";

const Card = ({ isProfile = false }) => {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.imgContainer}></div>
			{isProfile ? (
				<img className={styles.avatar} src="/dunk.jpg" alt="pp" fill />
			) : (
				<img className={styles.img} src="/dunk.jpg" alt="pp" fill />
			)}

			<h1 className={styles.title}>Titre de carte</h1>
			<p className={styles.description}>
				There are many variations of passages of Lorem Ipsum available, but the
				majority have suffered alteration in some form, by injected humour
			</p>
			<button className={styles.button}>Read more</button>
		</div>
	);
};

export default Card;
