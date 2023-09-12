import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
function Navbar() {
  return (
    <div className="Navbar">
      <ul id="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/createPost">Create Post</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
