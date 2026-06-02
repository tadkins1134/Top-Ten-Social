import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/top-ten">Top Ten</Link>
      <Link to="/friends">Friends</Link>
    </nav>
  );
}

export default Navbar;