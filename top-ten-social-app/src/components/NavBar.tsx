import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-800 text-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-1 py-2">
        <h1 className="text-xl font-bold">Top Ten Social</h1>

        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-semibold text-blue-400" : "hover:text-blue-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/top-ten"
            className={({ isActive }) =>
              isActive ? "font-semibold text-blue-400" : "hover:text-blue-300"
            }
          >
            Top Ten
          </NavLink>

          <NavLink
            to="/friends"
            className={({ isActive }) =>
              isActive ? "font-semibold text-blue-400" : "hover:text-blue-300"
            }
          >
            Friends
          </NavLink>


          <NavLink
            to="/backlog"
            className={({ isActive }) =>
              isActive ? "font-semibold text-blue-400" : "hover:text-blue-300"
            }
          >
            Backlog
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
