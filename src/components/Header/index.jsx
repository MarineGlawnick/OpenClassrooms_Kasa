import "./_header.scss"
import logoHeader from "../../assets/img/LOGO.svg"
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <header className="header">

            <img src={logoHeader} alt="Kasa logo" />

            <nav>
                <ul >
                    <li>
                        <NavLink  to="/">
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="/about">
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header