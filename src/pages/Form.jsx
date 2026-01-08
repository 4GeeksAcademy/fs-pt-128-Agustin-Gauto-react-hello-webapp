export const Form = () => {
    return(

    <div className="card align-self-center m-auto" style={{width: "1100px",}}>
				<h3 className="d-flex justify-content-center mt-3">Add new contact</h3>
				<div className="card-body m-auto " style={{width: "1000px",}}>
					<div className="input-group input-group-sm mb-3 row">
						<span className="input-group-text col-2" id="inputName">Name</span>
						<input type="text" className="form-control col-8" aria-label="Sizing example input" aria-describedby="inputName" />						
					</div>
					<div className="input-group input-group-sm mb-3 row">
						<span className="input-group-text col-2" id="inputEmail">Email</span>
						<input type="text" className="form-control col-8" aria-label="Sizing example input" aria-describedby="inputEmail" />						
					</div>
					<div className="input-group input-group-sm mb-3 row">
						<span className="input-group-text col-2" id="inputPhone">Phone</span>
						<input type="text" className="form-control col-8" aria-label="Sizing example input" aria-describedby="inputPhone" />						
					</div>
					<div className="input-group input-group-sm mb-3 row">
						<span className="input-group-text col-2" id="inputAdress">Adress</span>
						<input type="text" className="form-control col-8" aria-label="Sizing example input" aria-describedby="inputAdress" />						
					</div>
				</div>
				<div className="d-flex justify-content-center mb-3">
					<button type="button" className="btn btn-outline-primary col-2">Add Contact</button>
				</div>
			</div>
    )
}