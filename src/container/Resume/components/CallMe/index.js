import React from 'react';
// style 
import style from './style';
import Radium from 'radium';

const CallMe = props => {
    return (
        <div 
            style = {style.callme} 
            className = "container-fluid">
            <div 
                style = {style.callmeBox}
                className = "container">
                <h2 style = {style.callmeBoxTitle}>
                    JE SUIS DISPONIBLE EN TANT QUE FREELANCE
                </h2>
                <a 
                    style = {style.btnWhite}
                    rel="noopener noreferrer"  
                    href = "https://www.fr.freelancer.com/u/rionuj"
                    target = "_blank">
                    TRAVAILLONS ENSEMBLE
                </a>
            </div>
        </div>
    )
}

export default Radium(CallMe)