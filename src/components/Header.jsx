import '../hojas-de-estilo/Header.css'
import Button from "./Button.jsx";
import fbIcon from '../img/facebook.png'
import igIcon from '../img/instagram.png'
import userIcon from '../img/user.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Button texto="PERUHUT" type="logo-button"/>
            <div className="menu">
                <Button texto="Reservas" type="menu-button"/>
                <Button texto="Carta" type="menu-button"/>
            </div>
            <div className="social-media">
                <img src={fbIcon}/>
                <img src={igIcon}/>
                <Link to="/login"><img src={userIcon}/></Link>
            </div>
        </div>
    )
}

export default Header;