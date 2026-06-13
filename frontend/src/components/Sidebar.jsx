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

      <Link to="/about">
        About
      </Link>

      <Link to="/llr-application">
        LLR Application
      </Link>

    </div>
  );
}

export default Sidebar;
