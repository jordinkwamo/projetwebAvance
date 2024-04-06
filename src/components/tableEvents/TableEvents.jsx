
import React from "react";
import Styles from "./tableEvents.module.css";
import Image from "next/image";
import RemoveBtn from "@/components/removeBtn/RemoveBtn";

const TableEvents = ({ event }) => {
	return (
		<>
			<table className={Styles.table}>
				<thead>
					<tr>
						<th>Title</th>
						<th>Description</th>
						<th>Date</th>
						<th>Place</th>
						<th />
					</tr>
				</thead>
				<tbody>
					
					{event?.map((element) => (
						<tr key={element._id}>
							<td>
								<div style={{ display: "flex", gap: "5px" }}>
									<Image
										src={`/${element.img || "noimg.jpg"}`}
										alt={element.alt}
										width={50}
										height={50}
										style={{ borderRadius: "10px" }}
									/>
									{element.title}
								</div>
							</td>
							<td>{element.description}</td>
							<td>{element.date}</td>
							<td>{element.place}</td>
							<td>
								<RemoveBtn id={element._id} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default TableEvents;
