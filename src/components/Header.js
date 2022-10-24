import react from "react"
import "./styles/header.css"
import "./styles/medialarge.css"
const Header = () => {
    return(
        <header className="header">
            <div className="header__left">
                <h1 className="header__title">Application</h1>
            </div>
            <div className="header__right">
                <h3 className="header__menu">Thoughts</h3>
            </div>
        </header>
    );
}

export default Header;