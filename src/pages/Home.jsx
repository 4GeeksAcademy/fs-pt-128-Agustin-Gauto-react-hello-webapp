import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getContacts } from "../services/APIservices.js";
import { Form } from "./Form.jsx"

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
						<div key={contact.id}>
							<h3>Name: {contact.name}</h3>
							<p>Email:{contact.email}</p>
							<p>Phone:{contact.phone}</p>
							<p>Address:{contact.address}</p>
						</div>
					))
				}
			</div>
			<Form />
		</>
	);
}; 