// This is a custom hook

import { useState, useEffect } from "react"

const useFetch = ( url ) => {

	const [data, setData ] = useState( null )
	const [ isPending, setIsPending ] = useState( true )
	const [ error, setError ] = useState( null )

		useEffect( () => {
		// SetTimeout shows how thie works by delaying things a bit
		setTimeout( () => {
			// Fetch data from the endpoint
			fetch( url )
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
				setData( data )
				setIsPending( false )
				setError( null )
			})
			.catch( err => {
				// This only catches connection errors as the response object (res) can still return an object
				setIsPending( false )
				setError( err.message )
			})
		}, 1000 )
	// url is added here as needs to run only on initial render
	}, [ url ])


	// Return the data
	return { data, isPending, error }
}

export default useFetch