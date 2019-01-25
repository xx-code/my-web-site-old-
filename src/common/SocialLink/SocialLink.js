import React from 'react';
// style
import style from './style';
import Radium from 'raduim';

const SocialLink = props => {

    const { href,
            icon } = props;

    return(
        <li style = {style.socialLinkLi} >
            <a 
                style  = {style.socialLinkA}
                href = {href}
                rel="noopener noreferrer"
                target = "_blank">
                <i className={`fab ${icon}`}></i>
            </a>
        </li>
    )
}

export default Radium(SocialLink)