import { Link } from "react-router-dom";

const NotFound = () => {
	return ( 
		<div className="not-found">
			<h2>This is not the page you are looking for</h2>
			<p>This page cannot be found</p>
			<Link to="/">Go Home</Link>
		</div>
	 );
}
 
export default NotFound;