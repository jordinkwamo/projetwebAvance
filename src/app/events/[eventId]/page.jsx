import React from "react";
import Styles from "./eventDetails.module.css";
import Link from "next/link";
import Template from "@/components/templatepage/Template";

const getEventById = async (id) => {
	const res = await fetch(`http://localhost:3000/api/events/${id}`, {
		cache: "no-store",
	});

	if (!res.ok) {
		console.log("Erreur lors du fetching data");
	}

	const data = await res.json();
	return data;
};

const EventDetails = async ({ params }) => {
	const event = await getEventById(params.eventId);
	
	const urlImage = `/${event?.event.img}`;
	return (
		<div className={Styles.container}>
			<Link style={{ fontSize: "1.5rem", color: "purple" }} href="/events">
				{"< Retour a la liste"}
			</Link>
			{event?.event ? (
				<>     
					<Template
						title={event?.event.title}
						description={event?.event.description}
						src={urlImage}
						alt={event?.event.alt}
						date={event?.event.date}
						place={event?.event.place}
						textButton1="BILLETS"
					/>
				</>
			) : (
				<div className={Styles.titre}>
					L'evenement {params.eventId} n'existe pas
				</div>
			)}
		</div>
	);
};

export default EventDetails;
