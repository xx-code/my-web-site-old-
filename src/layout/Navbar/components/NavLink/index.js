import React from 'react';
// lib
import { Link } from 'react-scroll';
// style
import Radium from 'radium';
import style from './style';

const NavLink = props => {

    const { id, 
            title,
            isActive,
            isScroll } = props;

    return(
        <li id = {id} 
            style = {{
                ...!isScroll ? style.navTitle : style.navTitleScroll,
                ...isActive ? style.navActive : ''}}>
            <Link
                to={title} 
                spy={true} 
                smooth={true} 
                offset={-60} 
                duration={500}
                style = {style.navLink}>
                <a 
                    href = "#!"
                    onClick = {event => event.preventDefault()}
                    style = {style.navLink}>
                    {title}
                </a>
            </Link>
        </li>
    )
}

export default Radium(NavLink) 