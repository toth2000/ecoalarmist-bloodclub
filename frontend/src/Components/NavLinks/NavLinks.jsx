import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const defaultActiveStyle = {
    borderBottomColor : 'white'
};

const NavLinks = ({ linkText, link, style, activeStyle, onClick, icon }) => {

    return (
        <NavLink
            to = {link && link}
            style={({ isActive }) =>
                isActive
                    ? activeStyle
                        ? { ...defaultActiveStyle, ...style, ...activeStyle }
                        : { ...defaultActiveStyle, ...style }
                    : style
            }
            className="navlinks__full-div"
        >
            <div className="navlinks-icon__div">{icon && icon}</div>
            <span className="navbar__navlinks__text">
                {linkText && linkText}
            </span>
        </NavLink>
    );
};

export default NavLinks;
