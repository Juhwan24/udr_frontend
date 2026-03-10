import { NavLink } from "react-router-dom"

function Sidebar() {
  return (
    <aside className="w-64 bg-neutral-950 p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-8">🔈Spotibye</h1>

      <nav className="space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md font-medium transition ${
              isActive
                ? "bg-neutral-800 text-white"
                : "text-neutral-400 hover:text-white hover:bg-neutral-900"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/search"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md font-medium transition ${
              isActive
                ? "bg-neutral-800 text-white"
                : "text-neutral-400 hover:text-white hover:bg-neutral-900"
            }`
          }
        >
          Search
        </NavLink>

        <NavLink
          to="/library"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md font-medium transition ${
              isActive
                ? "bg-neutral-800 text-white"
                : "text-neutral-400 hover:text-white hover:bg-neutral-900"
            }`
          }
          >
          Your Library
        </NavLink>

        <NavLink 
            to="/premium"
            className={({ isActive }) =>
            `block px-3 py-2 rounded-md font-medium transition ${
              isActive
                ? "bg-neutral-800 text-white"
                : "text-neutral-400 hover:text-white hover:bg-neutral-900"
            }`
        }
        >
        Premium
        </NavLink>      
      
      </nav>
    </aside>
  )
}

export default Sidebar