"use client";
import { useRouter } from "next/navigation";
import Styles from "./removeBtn.module.css";

import React from "react";

const RemoveBtn = async ({ id }) => {
	const router = useRouter();
	const removeEvent = async () => {
		const confirmed = confirm(
			"Etes-vous sure de vouloir supprimer cet evenement !"
		);

		if (confirmed) {
			const res = await fetch(`http://localhost:3000/api/events?id=${id}`, {
				method: "DELETE",
			});
			if (res.ok) {
				router.refresh();
			}
		}
	};
	return (
		<button onClick={removeEvent} className={Styles.button}>
			Supprimer
		</button>
	);
};

export default RemoveBtn;
