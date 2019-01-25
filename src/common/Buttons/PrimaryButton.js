import React from 'react';
// style
import Radium from 'radium';
import style from './style'

const Button = props => {

    const { title, 
            onClick,
            styleOptions } = props;

    return(
        <button 
            style = {[style.btnLettalk, styleOptions]}
            onClick = {onClick}>
            {title}
        </button>
    )
}

export default Radium(Button)