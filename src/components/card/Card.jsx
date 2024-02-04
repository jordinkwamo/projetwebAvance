import React from "react";
import styles from "./card.module.css";

const Card = ({ isProfile = false,src,titre,description}) => {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.imgContainer}></div>
			{isProfile ? (
				<img className={styles.avatar} src={src} alt="pp" fill  />
			) : (
				<img className={styles.img} src={src} alt="pp" fill />
			)}

			<h1 className={styles.title}>{titre}</h1>
			<p className={styles.description}>
				{description}
			</p>
			<button className={styles.button}>Read more</button>
		</div>
	);
};

export default Card;
