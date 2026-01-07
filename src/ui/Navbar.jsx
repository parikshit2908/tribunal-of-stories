import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">HABIB UR REHMAN</div>
      <nav className="navbar-right">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/works">Works</NavLink>
        <NavLink to="/writings">Writings</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}
