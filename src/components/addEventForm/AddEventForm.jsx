"use client";
import React, { useState } from "react";
import Styles from "./addEvent.module.css";
import { useRouter } from "next/navigation";

const AddEventForm = () => {
	const router = useRouter();
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		date: "",
		place: "",
		img: "",
		alt: "",
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("http://localhost:3000/api/events", {
				method: "POST",
				header: { "Content-type": "application/json" },
				body: JSON.stringify(formData),
			});
			if (!response.ok) {
				console.log("Erreur lors de creation d'un evenement");
			} else {
				console.log("L'evenement est cree avec succes !");
				router.push("/admin");
			}
		} catch (error) {
			console.log("Error:", error);
		}
	};

	const handlechange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	return (
		<>
			<form onSubmit={handleSubmit} className={Styles.container}>
				<h1 className={Styles.title}>Ajouter un evenement</h1>
				<input
					type="text"
					name="title"
					value={formData.title}
					onChange={handlechange}
					placeholder="Title"
				/>
				<textarea
					type="text"
					name="description"
					value={formData.description}
					onChange={handlechange}
					row={3}
					placeholder="Description"
				/>
				<input
					type="text"
					name="date"
					value={formData.date}
					onChange={handlechange}
					placeholder="Date"
				/>
				<input
					type="text"
					name="place"
					value={formData.place}
					onChange={handlechange}
					placeholder="Place"
				/>
				<input
					type="text"
					name="img"
					value={formData.img}
					onChange={handlechange}
					placeholder="Image"
				/>
				<input
					type="text"
					name="alt"
					value={formData.alt}
					onChange={handlechange}
					placeholder="Alt"
				/>
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default AddEventForm;
