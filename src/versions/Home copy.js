import { useState } from "react"

const Home = () => {

	// const [ name, setName ] = useState( 'Mario' )
	// const [ age, setAge ] = useState( 25 )



	// const	changeName = () => {
	// 	setName('Luigi')
	// 	setAge( 30) 
	// }

	// const handleClick = (e) => {
	// 	console.log('Hello World', e);
	// }
	// const handleClickAgain = (name, e) => {
	// 	console.log(`Hello ${name} ${e.target}`);
	// }

	return (
		<div className="home">
			{/* <h1>Home page content</h1> */}
			{/* <p>{ name } { age }</p> */}
			{/* <button onClick={changeName}>Change Name</button> */}
			{/* <button onClick={handleClick}>Click me</button> */}
			{/* <button onClick={(e) => handleClickAgain('Cy', e)}>Click me again</button> */}
		</div>
	);
}

export default Home;