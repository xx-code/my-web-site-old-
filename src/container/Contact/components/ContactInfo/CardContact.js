import React from 'react';
// style 
import style from './style';
import Radium from 'radium';

const CardInfo = props => {

    const { icon, 
            label,
            text1,
            text2 } = props

    return(
        <div style = {style.contactInfo}>
            <i 
                className = {icon}
                style = {style.contactInfoIcon}>
            </i>
            <h4 style = {style.contactInfoTitle}>{`${label}:`}</h4>
            <p style = {style.contactInfoText}>
                {`${text1}`}
                <br></br>
                {`${text2}`}
            </p>
        </div>
    )
}

export default Radium(CardInfo)