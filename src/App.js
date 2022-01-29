import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Create from "./Create";
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Counter from "./Counter";

function App() {
                   
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					{/* All Routes go inside Switch component */}
					{/* Nest the component is the one you want to load the page with */}
					<Routes>
						{/* For a 404 - this does not work for anything nested...*/}
						<Route path='*' element={ <NotFound /> } />

						<Route path="/" element={ <Home /> } />
						<Route path="/create" element={ <Create /> } />
						<Route path="/counter" element={ <Counter /> } />
						{/* A changeable part of a route is called a "Route Parameter" */}
						<Route path="/blogs/:id" element={ <BlogDetails /> } />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
