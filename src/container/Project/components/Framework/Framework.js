import React from 'react';
import style from './style'
import Radium from 'radium';

const Framework = props => {

    const { url,
            img,
            name,
            type } = props;

    return(
        <div
            style = {style.frameWork} 
            className = "col-xs-6 col-sm-4">
            <div style = {style.frameContent} >
                <a 
                    href = {url} 
                    rel="noopener noreferrer" 
                    target = "_blank">
                    <img
                        style = {style.frameContentImg} 
                        src = {img} 
                        alt = "work"/>
                    <div  style = {style.aboutInfo}>
                        <h4 style = {style.aboutInfoTitle}>{name}</h4>
                        <label style = {style.aboutInfoLabel}>{type}</label>
                    </div>
                </a>
            </div> 
        </div>
    )
}

export default Radium(Framework)