import ContactForm from "@/components/contactForm/ContactForm";
//import ContactReactHookForm from "@/components/contactForm/ContactReactHookForm";
import React from "react";

export const metadata = {
	title: "Contactez nous",
	description: "Page contacte",
};

const Contact = () => {
	return (
		<div>
			<ContactForm />
			{/*<ContactReactHookForm />*/}
		</div>
	);
};

export default Contact;
