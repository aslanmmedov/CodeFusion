import { useState } from "react"
import Logo from '../logo/Logo'
import Navlist from '../navlist/Navlist'
import "./Navbar.css"
import Wrapper from "../wrapper/Wrapper"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='navbarr container'>
        <Logo/>

        {/* Hamburger ikonası mobil üçün */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? "change" : ""}`}></div>
          <div className={`bar ${isOpen ? "change" : ""}`}></div>
          <div className={`bar ${isOpen ? "change" : ""}`}></div>
        </div>

        {/* Navlist komponentini conditional göstəririk */}
        <div className={`nav-menu ${isOpen ? "open" : ""}`}>
          <Navlist />
        </div>
        <Wrapper/>
    </nav>
  )
}

export default Navbar
