import { Link } from "react-router-dom";
import './Navbar.css';


export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/NewPlayerForm">NewPlayer</Link>
        </li>
        <li>
          <Link to="/Allplayers">AllPlayers</Link>
        </li>
        <li>
          <Link to="/SinglePlayer">SinglePlayer</Link>
        </li>
      </ul>
    </nav>
  );
}