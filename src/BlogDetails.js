import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
	const { id }= useParams()
	const { data: blog, error, isPending } = useFetch( 'http://localhost:8000/blogs/' + id )
	const navigate = useNavigate()

	const handleClick = () => {
			fetch( 'http://localhost:8000/blogs/' + blog.id, {
				method: 'DELETE'
			})
			.then( () => {
				navigate( '/' )
			})
	}

	return (  
		<div className="blog-details">
		 { isPending && <div>Loading...</div> } 	{/* If it is loading, then show a loading message */}
			{ error && <div>{ error }</div> } {/* If there is an error, then show an error */}

			{/* If it is not loading and there is no error, then show the blog post */}
			{ blog && (
				<article>
					<h2>{ blog.title} </h2>
					<p className="small">Written by { blog.author }</p>
					<div>{ blog.body }</div>
					<button onClick={ handleClick }>Delete</button>
				</article>
			)}
		</div>
	);
}
 
export default BlogDetails;