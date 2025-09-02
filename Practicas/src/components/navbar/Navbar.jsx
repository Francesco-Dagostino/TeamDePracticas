import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h1 className="navbar-brand" to="/">🎬 Cine Rosario</h1>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/billboard" end>
                Cartelera
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/newmovie">
                Nueva Película
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar