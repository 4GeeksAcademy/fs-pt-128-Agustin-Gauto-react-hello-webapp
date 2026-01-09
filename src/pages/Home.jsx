import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { deleteContact, getContacts } from "../services/APIservices.js";
import { Form } from "./Form.jsx"
import { ContactCard } from "./ContactCard.jsx"

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	useEffect(() => {
		getContacts(dispatch)
		console.log(store.contacts);

	}, [])

	return (
		<>
			<h1 className="d-flex justify-content-center">Hola estas en el Home</h1>
			<div className="container">
				{
					store.contacts.map(contact => (
						<ContactCard contact={contact} key={contact.id}/>
					))
				}
			</div>
			<Form />
		</>
	);
}; 