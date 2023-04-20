import './Header.css'
import {Link, NavLink} from "react-router-dom";
import Logo from '../assets/logo.png'

export const Header = () => {
    return (
        <header>
            <Link to={'/'} className={'logo'}>
                <img src={Logo} alt="Shop Mate Logo"/>
                <span>Shopping Cart</span>
            </Link>
            <nav className={'navigation'}>
                <NavLink to={'/'} className={'link'} end>Home</NavLink>
                <NavLink to={'cart/'} className={'link'}>Cart</NavLink>
            </nav>
            <Link to={'cart/'} className={'items'}>
                <span>Cart : 6</span>
            </Link>
        </header>
    );
};