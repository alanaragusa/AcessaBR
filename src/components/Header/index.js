import React from "react";
import 'style';
import logoAcessaBr from '../../images/logo-acessaBR.svg'
import logoEbac from '../../images/logo-ebac.svg'

const Header = () => {
    return (
        <header className="header__container">
            <div className="header__logo--state">
                <img src={logoAcessaBr} alt="Logo AcessaBR"/>
            </div>
            <div className="header__logo--ebac">
                <img src={logoEbac} alt="Logo Ebac"/>
            </div>
        </header>
    )
}

export default Header;