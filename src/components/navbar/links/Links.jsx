"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Styles from "./links.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

const links = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "Evenements",
		path: "/events",
	},
	{
		title: "Contact",
		path: "/contact",
	},
];

const Links = () => {
	const pathName = usePathname();
	const [open, setOpen] = useState(false);

	return (
		<div className={Styles.container}>
			<div className={Styles.links}>
				{links.map((link, index) => (
					<Link
						className={pathName === link.path ? `${Styles.active}` : ""}
						href={link.path}
						key={index}
					>
						{link.title}
					</Link>
				))}
			</div>
			<div className={Styles.menuButton}>
				<IconButton onClick={() => setOpen(!open)}>
					<MenuIcon style={{ color: "white" }} />
				</IconButton>
			</div>
			{open && (
				<div className={Styles.mobileLinks}>
					{links.map((link, index) => (
						<Link
							className={pathName === link.path ? `${Styles.active}` : ""}
							href={link.path}
							key={index}
							onClick={() => setOpen(!open)}
						>
							{link.title}
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default Links;
