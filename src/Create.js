import { useState } from "react";
import { useNavigate } from "react-router-dom";


const  Create = ( ) => {
		const [ title, setTitle ] = useState( '' )
		const [ body, setBody ] = useState( '' )
		const [ author, setAuthor ] = useState( 'Fifi The Destroyer' )
		const [ isPending, setIsPending ] = useState( false )

		const navigate = useNavigate()

		const handleSubmit = ( e ) => {
			e.preventDefault()
			const blog = {
				title,
				body,
				author
			}

			setIsPending( true )

			// Make post request for saving data
			fetch( 'http://localhost:8000/blogs/', {
				method: 'POST',
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify( blog )
			})
			.then( () => {
				console.log( 'new blog added' );
				setIsPending( false )
				navigate( '/', { replace: true } )
			})

		}

// "Controlled input" takes input data and turns it into state

	return ( 
		<div className="create">
			<h2>Create</h2>
			<form onSubmit={ handleSubmit }>
				<label htmlFor="title">Blog Title:</label>
				<input 
					name="title"
					type="test"
					required
					placeholder="Add a title"
					value={ title }
					onChange={ (e) => setTitle(e.target.value) }
				/>

				<label htmlFor="blogContent">Blog Content:</label>
				<textarea
					required
					name="blogContent"
					placeholder="Add some content"
					value={ body }
					onChange={ (e) => setBody(e.target.value) }
					></textarea>

					<label htmlFor="">Blog Author:</label>
					<select
						value={ author }
						onChange={ (e) => setAuthor(e.target.value) }
						>
						<option value="Cy Culpin">Cy Culpin</option>
						<option value="Fifi The Destroyer">Fifi the Destroyer</option>
						<option value="Ron Burgandy">Ron Burgandy</option>
					</select>

					{/* { !isPending && <button>Add Blog</button> }
					{ isPending && <button disabled>Adding Blog...</button> } */}

					{/* Or this? - find out. Ternary feels better */}

					{ isPending ? <button disabled>Adding Blog...</button> : <button>Add Blog</button> }

			</form>
		</div>
	 );
}
 
export default Create;