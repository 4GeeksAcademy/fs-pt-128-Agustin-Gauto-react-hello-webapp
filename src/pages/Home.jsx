import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { deleteContact, getContacts } from "../services/APIservices.js";
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
						<div key={contact.id} className="card border-dark m-3 p-3" >
							<div className="d-flex justify-content-between">
								<div className="d-flex justify-content-start">
									<img src="https://imagenes.atresplayer.com/atp/clipping/cmsimages01/2020/09/15/83BD4801-852F-461A-A4F9-F61ECB2B0867//720x540.jpg" alt="" className="object-fit-cover rounded-circle" style={{ width: "240px", height: "240px" }} />
									<div className="m-4">
										<h3>Name: {contact.name}</h3>
										<p>Email: <i className="fa-solid fa-envelope"></i> {contact.email}</p>
										<p>Phone: <i className="fa-solid fa-phone"></i> {contact.phone}</p>
										<p>Address: <i className="fa-solid fa-location-dot"></i> {contact.address}</p>
									</div>
								</div>
								<div>
									<button className="btn m-0" type="button"> <i className="fa-solid fa-pencil"></i> </button>
									<button className="btn m-0" type="button" onClick={()=>deleteContact(contact.id, dispatch)}> <i className="fa-regular fa-trash-can"></i> </button>
								</div>
							</div>
						</div>
					))
				}
			</div>
			<Form />
		</>
	);
}; 