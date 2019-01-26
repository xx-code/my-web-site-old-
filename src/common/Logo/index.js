import React from 'react';
// style
import style from './style';
import Radium from 'radium';

const Logo =  props => {

    const { logoName, 
            isScroll, 
            toggleUp,
            styleToggle } = props

    return(
        <div style = { !isScroll ? style.headerLogo : style.headerLogoScroll}>
            <h1 style = {style.headerTitle}>
                <div>{logoName}</div>
            </h1>
            <div style = {styleToggle} onClick = {toggleUp} >
                <i className="fas fa-bars"></i>
            </div>
        </div>
    )
}

export default Radium(Logo)