import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	useEfect(()=>{
		getContacts()
	})

	return (
		<>
			<h1 class="d-flex justify-content-center">Hola estas en el Home</h1>
		</>
	);
}; 