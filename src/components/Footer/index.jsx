import logo from "../../assets/img/logo_footer.svg"
import "./_footer.scss"

function Footer() {
    return (
        <footer>
            <img src={logo} alt='Logo de Kasa'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;