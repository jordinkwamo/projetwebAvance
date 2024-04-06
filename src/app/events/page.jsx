import React from "react";
import Card from "@/components/card/Card";

const getEvents = async () => {
	try {
		const res = await fetch("http://localhost:3000/api/events", {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Erreur lors du fetching events");
		}
		const data = await res.json();
		console.log(data.event)
		return data.event; // Accédez à la propriété 'events' de la réponse JSON
	} catch (error) {
		console.log("Error loading events : ", error);
	}
};

const Events = async () => {
	try {
		const events = await getEvents();
		const urlImg = "/";
		return (
			<div
				style={{
					fontSize: "2rem",
					display: "flex",
					flexWrap: "wrap",
					padding: "2rem",
				}}
			>
				{events &&
					events.map((item, index) => (
						<Card
							key={index}
							id={item._id}
							title={item.title}
							description={item.description}
							img={urlImg + item.img}
						/>
					))}
			</div>
		);
	} catch (error) {
		console.log(error);
		return (
			<div> Une erreur s'est produite lors du fetching des evenements</div>
		);
	}
};

export default Events;
