import { NavLink } from "react-router-dom";

function Navbar2() {
  return (
    <nav className="mass-navbar">
      <ul className="mass-nav-list">
        <li><NavLink to="Entrance">Entrance</NavLink></li>
        <li><NavLink to="Offetory">Offetory</NavLink></li>
        <li><NavLink to="Communion">Communion</NavLink></li>
        <li><NavLink to="LambOfGod">Lamb of God</NavLink></li>
        <li><NavLink to="Thanksgiving">Thanksgiving</NavLink></li>
        <li><NavLink to="Exit">Exit</NavLink></li>
       
      </ul>
    </nav>
  );
}

export default Navbar2;
