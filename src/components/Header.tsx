import React from "react";
import { NavLink } from "react-router-dom";
import LogoPokemon from "img/LogoPokemon.png"
import "scss/_header.scss"

const Header:React.FC = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <div className="header__logo-container">
                    <img className="header__logo-img" src={LogoPokemon} alt="logo" />
                </div>
            </div>
            <ul className="header__menu">
                <NavLink className="list__item list__item-page" to=''>
                    Main
                </NavLink>
                <NavLink className="list__item list__item-page" to='/About'>
                    About
                </NavLink>
                <NavLink className="list__item list__item-page" to='/CardsPokemonInfo'>
                    Cards Pokemon Info
                </NavLink>
            </ul>
        </div>
    )
}
export default Header