import React from 'react';
import Radium from 'radium';
import style from './Style'

const NavLink = props => {

    const { id, 
            link, 
            onClick, 
            title,
            isActive,
            isScroll } = props;

    return(
        <li id = {id} style = {{
            ...!isScroll ? style.navTitle : style.navTitleScroll,
            ...isActive ? style.navActive : ''}}>
            <a 
                href = {link} 
                onClick = {onClick}
                style = {style.navLink}>
                {title}
            </a>
        </li>
    )
}

export default Radium(NavLink) 