import { useReducer } from "react";


const ACTIONS = {
	INCREMENT : 'increment',
	DECREMENT : 'decrement',
	RESET : 'reset'
}
// When we call dispatch, it gets set to an action and sets our count to + 1
function reducer( state, action ) {
	
	switch ( action.type ) {
		case ACTIONS.INCREMENT:
			return { count: state.count + 1 }
		case ACTIONS.DECREMENT:
			return { count: state.count - 1 }
		case ACTIONS.RESET:
			return { count: state.count = 0 }
		default:
			return state
	}

	return { count: state.count + 1 }
}

const Counter = () => {

	// if we arent returning an object, we could just use [ count, dispatch ]
	const [ state, dispatch ] = useReducer( reducer, { count: 0 } )

	function increment() {
		// By adding a type you set the action
		dispatch( { type: ACTIONS.INCREMENT })
	}

	function decrement() {
		dispatch( { type: ACTIONS.DECREMENT })
	}

	function reset() {
		dispatch( { type: ACTIONS.RESET })
	}
	return (
		<>
		<button onClick={ decrement }>-</button>
		<span>{ state.count }</span>
		<button onClick={ increment }>+</button>
		<button onClick={ reset }>RESET</button>
		</>
	)
}

export default Counter