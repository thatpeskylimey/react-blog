import { useEffect, useState } from "react"
import BlogList from "./BlogList";


const Home = () => {

	const [blogs, setBlogs ] = useState( null )
	const [ isPending, setIsPending ] = useState( true )
	const [ error, setError ] = useState( null )

	useEffect( () => {
		// SetTimeout shows how thie works by delaying things a bit
		setTimeout( () => {
			// Fetch data from the endpoint
			fetch( 'http://localhost:8000/blogs')
			// this is a promise so continues when it has the data to begin
			.then( res => {
				console.log(res);
				if( !res.ok ) {
					// Throw error
					throw Error( 'Could not fetch the data for that resource' )
				}
				return res.json()
			})
			// this is a promise so continues when it has the data to begin
			.then( ( data ) => {
				console.log( data );
				setBlogs( data )
				setIsPending( false )
				setError( null )
			})
			.catch( err => {
				// This only catches connection errors as the response object (res) can still return an object
				setIsPending( false )
				setError( err.message )
			})
		}, 1000 )
	}, [])


	return (
		<div className="home">

			{/* The '&&' is conditional templating in React. It is a 'logical and'.  It evaluates the left if it is true, it moves over to the right and does that */}
			{/* This is a loading message */}
			{ error && <div>{ error }</div>}
			{ isPending && <div>Loading...</div> }
			{ blogs && <BlogList blogs={blogs} title={"All blogs!"}  /> }
		</div>
	);
}

export default Home;