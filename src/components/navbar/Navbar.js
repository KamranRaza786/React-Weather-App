import { Link } from "react-router-dom";
import './style.css';
const Navbar = () => {
    return(
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><Link to="/" className="navbar-link">Display Light</Link></li>
                <li className="navbar-item"><Link to="/temperature" className="navbar-link">Display Temperature</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;