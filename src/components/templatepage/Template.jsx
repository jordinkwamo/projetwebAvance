import React from "react";
import Image from "next/image";
import styles from "./template.module.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";

const Template = ({
	title = "Titre",
	description = "Description",
	textButton1 = " READ MORE",
	textButton2 = "CONTACT",
	src = "/equipeAbasketball.jpg",
	alt = "equipeAbasketball",
	date,
	place,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.description}>{description}</p>
				<div className={styles.date}>
					<CalendarMonthIcon />
					{date}
				</div>
				<div className={styles.place}>
					<PlaceIcon />
					{place}
				</div>
				<div className={styles.buttons}>
					<button className={styles.button}>{textButton1}</button>
					<button className={styles.button}> {textButton2}</button>
				</div>
			</div>
			<div className={styles.imgContainer}>
				<Image src={src} alt={alt} fill />
			</div>
		</div>
	);
};

export default Template;
