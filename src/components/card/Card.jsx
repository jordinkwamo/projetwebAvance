"use client";
import React from "react";
import styles from "./card.module.css";
import { useRouter } from "next/navigation";

const Card = ({
	isProfile = false,
	title,
	description,
	id,
	img = "/equipeAbasketball.jpg",
}) => {
	const router = useRouter();

	const handlerclick = () => {
		router.push(`/events/${id}`);
	};

	return (
		<div className={styles.cardContainer}>
			<div className={styles.imgContainer}></div>
			{isProfile ? (
				<img className={styles.avatar} src={img} alt="pp" fill />
			) : (
				<img className={styles.img} src={img} alt="pp" fill />
			)}

			<h1 className={styles.title}>{title}</h1>
			<p className={styles.description}>{description}</p>
			<button className={styles.button} onClick={handlerclick}>
				Read more
			</button>
		</div>
	);
};

export default Card;
