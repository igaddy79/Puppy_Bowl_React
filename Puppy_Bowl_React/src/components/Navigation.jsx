import { Link } from "react-router-dom";
import './Navbar.css';


export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/NewPlayerForm">NewPlayer</Link>
        </li>
        <li>
          <Link to="/Allplayers">AllPlayers</Link>
        </li>
        
      </ul>
    </nav>
  );
}