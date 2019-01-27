import React from 'react';
// component
import SocialLink from './SocialLink'
// style
import Radium from 'radium';
import style from './style';

const SocialLinkList = ({socialLinks, anotherOption}) => {
    return(
        <div style = {anotherOption}>
            <ul style = {style.socialLinkList} >
            {
                socialLinks.map((socialLink) => {
                    return(
                        <SocialLink
                            key = {socialLink.id}
                            href = {socialLink.href}
                            icon = {socialLink.icon} 
                        />
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Radium(SocialLinkList)