import React from "react";
import Styles from "./admin.module.css";
import Link from "next/link";
import TableEvents from "@/components/tableEvents/TableEvents";

const getEvents = async () => {
	try {
		const res = await fetch("http://localhost:3000/api/events", {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Erreur lors du fetching events");
		}
		const data = await res.json();
		 
		return data.event; // Accédez à la propriété 'events' de la réponse JSON
	} catch (error) {
		console.log("Error loading events : ", error);
	}
};

const pageAdmin = async () => {
	const event = await getEvents();
	return (
		<div className={Styles.container}>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<h1 style={{ fontSize: "1.5rem" }}>
					Page admin - Liste des evenements
				</h1>
				<Link href="/admin/addEvent" className={Styles.button}>
					Ajouter un evenement
				</Link>
			</div>
			{event ? (
				<TableEvents event = {event} />  
			) : (  
				<h1 style={{ fontSize: "1.5rem" }}>Aucun evenement n'est trouvé</h1>
			)}
		</div>
	);
};

export default pageAdmin;
