import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        MBCCD <span style={{ fontSize: "12px" }}>(IT Daily Reports)</span>
      </h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Report</Link>
      </div>
    </nav>
  );
};

export default Navbar;
