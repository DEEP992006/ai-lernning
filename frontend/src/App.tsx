import { NavLink } from "react-router"
function App() {
  return (
    <nav>
      <NavLink to="/" className="" end>
        Home
      </NavLink>
      <NavLink to="/trending" className="active:text-green-500">
        Trending Concerts
      </NavLink>
      <NavLink to="/concerts">All Concerts</NavLink>
      <NavLink to="/account">Account</NavLink>
      
    </nav>

  )
}

export default App
