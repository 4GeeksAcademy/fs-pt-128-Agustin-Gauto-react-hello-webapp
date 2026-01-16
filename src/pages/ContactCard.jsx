import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"
import { deleteContact, getContacts } from "../services/APIservices"
import { Link } from "react-router-dom";

export const ContactCard = ({ contact }) => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		getContacts(dispatch)
	}, [])

	return (
		<div className="card border-dark m-3 p-3" >
			<div>
				{
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
							<Link to={`/edit/${contact.id}`}>
								<button className="btn m-0" type="button"> <i className="fa-solid fa-pencil"></i> </button>
							</Link>
							<button 
							className="btn m-0" 
							type="button" 
							data-bs-toggle="modal"
							data-bs-target={`#deleteModal-${contact.id}`}
							> <i className="fa-regular fa-trash-can"></i> </button>
						</div>
					</div>
				}
			</div>

			<div className="modal fade" id={`deleteModal-${contact.id}`} tabindex="-1" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Contact removal</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<p>Are you sure you want to delete {contact.name}?</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
							<button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal" onClick={() => deleteContact(contact.id, dispatch)}>Delete</button>
						</div>
					</div>
				</div>
			</div>
		</div>


	)
}