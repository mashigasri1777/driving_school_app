import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <Link to="/">
        Dashboard
      </Link>

      <Link to="/students">
        Students
      </Link>

    </div>
  );
}

export default Sidebar;
