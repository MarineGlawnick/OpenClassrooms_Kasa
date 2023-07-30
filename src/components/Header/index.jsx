import "./_header.scss"
import logoHeader from "../../assets/img/logo_header.svg"
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <header className="header">

            <img src={logoHeader} alt="Kasa logo" />

            <nav>
                <ul >
                    <li>
                        <NavLink to="/" className='nav_link'>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className='nav_link'>
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header