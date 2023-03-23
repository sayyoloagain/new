import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Rocket from "./assets/Rocket.PNG"
import { FcSearch } from 'react-icons/fc';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        {/* Site Name */}
        <img src={Rocket} className="Rocket" alt="RocketLogo"/>
      </Link>
      <ul>
        
        <div className="IconSearch">< FcSearch/></div>
        <input className='Search' type="text" placeholder="Search Shop or Address"/>
        <CustomLink to="/outlet">Outlet</CustomLink>
        <CustomLink to="/transaction">Transaction</CustomLink>
        <CustomLink to="/notification">Notification</CustomLink>
        <CustomLink to="/account">Account</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
