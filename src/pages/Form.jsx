import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { addContact, editContacts } from "../services/APIservices";

export const Form = ({titulo, button}) => {

	const {store, dispatch} = useGlobalReducer()
	
	const navigate = useNavigate()

	const {id} = useParams()

	const [contact, setContact] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
	})

	const handleInputChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value

        })
	}

	const [isEditing, SetIsEditing] = useState(false)

	const [showAlert, setShowAlert ] = useState(false)

	const handleSumbit = async (e) => {
		e.preventDefault();
		if(!contact.name || !contact.email || !contact.phone || !contact.address ) {
			setShowAlert(true);
			setTimeout(()=>setShowAlert(false), 2000);
			return;
		}
		   if (isEditing) {
           await editContacts(contact, dispatch, navigate)
        } else{
           await addContact(contact, dispatch, navigate)
        }
	}

	const contactToEdit = () => {
		const contactFind = store.contacts.find(contact => { return contact.id === Number(id)}) 
		console.log(contactFind);
		setContact(contactFind)
	}

useEffect(()=>{
	if(id){
		SetIsEditing(true)
		contactToEdit()
	}else{
		SetIsEditing(false)
	}
},[])
	
    return(

    <form className="card align-self-center m-auto" style={{width: "1100px",}} onSubmit={handleSumbit}>
		{showAlert && ( 
			<div className="alert alert-warning" role="alert">
				debes completar todos los campos
			</div>
		)}
				<h3 className="d-flex justify-content-center mt-3">{titulo}</h3>
				<div className="card-body m-auto " style={{width: "1000px",}}>
					<div className="input-group input-group-sm mb-3 row">
						<span className="input-group-text col-2" id="inputName">Name</span>
						<input 
						type="text" 
						className="form-control col-8" 
						aria-label="Sizing example input" 
						aria-describedby="inputName" 
						name="name" 
						value={contact.name} 
						onChange={handleInputChange}
						/>						
					</div>
					<div className="input-group input-group-sm mb-3 row">
						<span className="input-group-text col-2" id="inputEmail">Email</span>
						<input 
						type="text" 
						className="form-control col-8" 
						aria-label="Sizing example input" 
						aria-describedby="inputEmail" 
						name="email" 
						value={contact.email} 
						onChange={handleInputChange}
						/>						
					</div>
					<div className="input-group input-group-sm mb-3 row">
						<span className="input-group-text col-2" id="inputPhone">Phone</span>
						<input 
						type="text" 
						className="form-control col-8" 
						aria-label="Sizing example input" 
						aria-describedby="inputPhone" 
						name="phone" 
						value={contact.phone} 
						onChange={handleInputChange}
						/>						
					</div>
					<div className="input-group input-group-sm mb-3 row">
						<span className="input-group-text col-2" id="inputAddress">Address</span>
						<input 
						type="text" 
						className="form-control col-8" 
						aria-label="Sizing example input" 
						aria-describedby="inputAddress" 
						name="address" value={contact.address} 
						onChange={handleInputChange}
						/>						
					</div>
				</div>
				<div className="d-flex justify-content-center mb-3">
					<button 
					type="submit" 
					className="btn btn-outline-primary col-2" 
					onChange={handleInputChange}
					>
						{button}
						</button>
				</div>
			</form>
    )
}