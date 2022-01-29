import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1><Link to="/">The Dojo Blog</Link></h1>
			
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/create">New Blog</Link>
				<Link to="/counter">Counter</Link>
			</div>
      
			{/* How to add style tags to elements */}
      {/* <a href="/create" style={{
        color: "white",
        backgroundColor: "#f1356d"
      }}>Create Blog</a> */}
    </nav>
  );
}
 
export default Navbar;