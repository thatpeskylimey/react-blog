import { useEffect, useState } from "react"
import BlogList from "./BlogList";


const Home = () => {

	const [blogs, setBlogs ] = useState([
		{ title: 'My New website', body: 'Lorem Ipsum...', author: 'Cy Culpin', id: 1 },
		{ title: 'My Other website', body: 'Lorem Ipsum...', author: 'Fifi the destroyer', id: 2 },
		{ title: 'My Last website', body: 'Lorem Ipsum...', author: 'Ron Burgandy', id: 3 }
	])

	const [ name, setName ] = useState( 'Cy Culpin' )

	// This function is passed as a prop
	const handleDelete = ( id ) => {
		// create new array and pass it into setBlogs to update the state
		const newBlogs = blogs.filter( blog => blog.id !== id )
		setBlogs(newBlogs) 
	}

	// useEffect will run on every render
	// Adding a dependancy array with the state after the anonymous function will define
	//  when this is run but still allows it to run on the initial render
	useEffect( () => {
		console.log( 'use effect ran' );
		console.log( name );
	}, [ blogs ])

// Key is required  and is usually the ID 

	return (
		<div className="home">
			<BlogList blogs={blogs} title={"All blogs!"} handleDelete={ handleDelete } />

			{/* Using filter, you can get things from your list of blogs  */}
			{/* <BlogList blogs={ blogs.filter( ( blog ) => blog.author === 'Cy Culpin' ) } title={ "Cy's blogs!" } /> */}

			<button onClick={ () => setName( 'Brick Tamland' ) }>Change name</button>
			<p>{ name }</p>
		</div>
	);
}

export default Home;