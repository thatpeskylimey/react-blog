import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

	// If you use an object instead of an Array, you won't need to worry about ordering when destructuring
	// data: blogs gives this state an alias/name

	const { data: blogs, isPending, error } = useFetch( 'http://localhost:8000/blogs' )


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