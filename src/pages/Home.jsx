import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { deleteContact, getContacts } from "../services/APIservices.js";
import { Form } from "./Form.jsx"
import { ContactCard } from "./ContactCard.jsx"
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	useEffect(() => {
		getContacts(dispatch)
		console.log(store.contacts);

	}, [])

	return (
		<>
			<h1 className="d-flex justify-content-center">My contacts 📖 </h1>
			<div className="container">
				{
					store.contacts.map(contact => (
						<ContactCard contact={contact} key={contact.id} />
					))
				}
			</div>
				<Link to="Add">
			<div className="d-flex justify-content-center mb-3">
					<button type="button" className="btn btn-outline-primary col-2">Add Contact</button>
			</div>
					</Link>
		</>
	);
}; 