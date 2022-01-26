// This is a custom hook

import { useState, useEffect } from "react"

const useFetch = ( url ) => {

	const [data, setData ] = useState( null )
	const [ isPending, setIsPending ] = useState( true )
	const [ error, setError ] = useState( null )

		useEffect( () => {
			// Adding this will abort the fetch. 
			// Add the return statement and also put a conditional around updating state in the catch error area
			const abortCont = new AbortController()

		// SetTimeout added to demonstrate how this works by delaying things by 1s
		setTimeout( () => {
			// Fetch data from the endpoint
			// Add second argument to check to see if the fetch is aborted (by things such as a fast link click or re-click)
			fetch( url, { signal: abortCont.signal} )
			// This is a promise so continues when it has a result (res)
			.then( res => {
				console.log(res);
				if( !res.ok ) {
					// Throw error
					throw Error( 'Could not fetch the data for that resource' )
				}
				return res.json() // Convert the result to json
			})
			// This is a promise so continues when the previous one has and it has the data
			.then( ( data ) => {
				console.log( data ); // Log the data we are getting
				// Update state
				setData( data )
				setIsPending( false )
				setError( null )
			})
			.catch( err => {
				// Catch connection errors as the response object (res) can still return an object
				if (err.name === 'AbortError') {
					console.log('fetch aborted');
				} else {
					// If there is no abort, set state
					setIsPending( false )
					setError( err.message )
				}
			})
		}, 500 )

		return () => abortCont.abort()

	// url is added here as needs to run only on initial render. Things in [] only run on initial render
	}, [ url ])

	// Return the data
	return { data, isPending, error }
}

export default useFetch