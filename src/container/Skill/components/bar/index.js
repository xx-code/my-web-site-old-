import React from 'react';
//component
// styles
import style from './styles';
import Radium from 'radium';

const Bar = props => {

    const { skill, 
            pourcentage } = props;

    return(
        <div style = {style.bar}>
            
            <p style = {style.skill}><i className="fab fa-js-square"></i>  {skill}</p>
            <div style = {style.containerBar}>
                <div style = {{...style.pourcentageBar, width: `${pourcentage}%`}}>
                    <span style = {style.pourcentText}>{`${pourcentage}%`}</span>
                </div>
            </div>
        </div>
    )
}

export default Radium(Bar) 