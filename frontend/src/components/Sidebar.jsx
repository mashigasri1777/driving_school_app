import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Menu</h3>

      <br />

      <p>
        <Link to="/" style={{ color: "white" }}>
          Dashboard
        </Link>
      </p>

      <br />

      <p>
        <Link to="/students" style={{ color: "white" }}>
          Students
        </Link>
      </p>

      <br />

      <p>
        <Link to="/fees" style={{ color: "white" }}>
          Fees
        </Link>
      </p>

      <br />

      <p>
        <Link to="/schedule" style={{ color: "white" }}>
          Schedule
        </Link>
      </p>
    </div>
  );
}

export default Sidebar;
