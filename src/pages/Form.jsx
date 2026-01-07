export const Form = () => {
    return(

    <div class="card align-self-center m-auto" style={{width: "1100px",}}>
				<h3 class="d-flex justify-content-center mt-3">Add new contact</h3>
				<div class="card-body m-auto " style={{width: "1000px",}}>
					<div class="input-group input-group-sm mb-3 row">
						<span class="input-group-text col-2" id="inputName">Name</span>
						<input type="text" class="form-control col-8" aria-label="Sizing example input" aria-describedby="inputName" />						
					</div>
					<div class="input-group input-group-sm mb-3 row">
						<span class="input-group-text col-2" id="inputEmail">Email</span>
						<input type="text" class="form-control col-8" aria-label="Sizing example input" aria-describedby="inputEmail" />						
					</div>
					<div class="input-group input-group-sm mb-3 row">
						<span class="input-group-text col-2" id="inputPhone">Phone</span>
						<input type="text" class="form-control col-8" aria-label="Sizing example input" aria-describedby="inputPhone" />						
					</div>
					<div class="input-group input-group-sm mb-3 row">
						<span class="input-group-text col-2" id="inputAdress">Adress</span>
						<input type="text" class="form-control col-8" aria-label="Sizing example input" aria-describedby="inputAdress" />						
					</div>
				</div>
				<div class="d-flex justify-content-center mb-3">
					<button type="button" class="btn btn-outline-primary col-2">Add Contact</button>
				</div>
			</div>
    )
}