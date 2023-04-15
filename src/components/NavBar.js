import { Link } from "react-router-dom";
import "./navBar.css";

function NavBar()
{
    return(
        <nav>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/complete">Complete</Link>
            <Link className="link" to="/incomplete">Incomplete</Link>
        </nav>
    )
}

export default NavBar;