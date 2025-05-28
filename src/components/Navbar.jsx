
import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Catholic Music</h2>
      <ul className="nav-links">
        <li><NavLink to="/" end className="nav-link">Home</NavLink></li>
        <li><NavLink to="/masssongs" className="nav-link">Mass</NavLink></li>
        <li><NavLink to="/lentensongs" className="nav-link">Lenten</NavLink></li>
        <li><NavLink to="/Eastersongs" className="nav-link">Easter</NavLink></li>
        <li><NavLink to="/mariansongs" className="nav-link">Marian</NavLink></li>
        <li><NavLink to="/HolySpiritsongs" className="nav-link">Holy Spirit</NavLink></li>
        <li className="dropdown">
          <span className="nav-link">Occasions </span>
          <ul className="dropdown-content">
            <li><NavLink to="/Occasions/baptism" className="nav-link">Baptism</NavLink></li>
            <li><NavLink to="/Occasions/death" className="nav-link">Death</NavLink></li>
          </ul>
        </li>
        <li><NavLink to="/Praise" className="nav-link">Praise</NavLink></li>
      </ul>
    </nav>
  );
}
