import React from 'react';
// style
import style from './style';
import Radium from 'radium';

const ProfilePicture = ({src}) => {

    return (
        <div style = {style.frame}>
            <img 
                alt = "profile" 
                className = "img-fluid" 
                src = {src} 
                style = {style.profile}
            />
        </div>
    )
}

export default Radium(ProfilePicture)