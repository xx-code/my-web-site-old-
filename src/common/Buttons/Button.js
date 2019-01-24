import React from 'react';
import Radium from 'radium';
import styles from './style'

const Button = ({title, onClick}) => {
    return(
        <button 
            style = {styles.btnLettalk}
            onClick = {onClick}>
            {title}
        </button>
    )
}

export default Radium(Button)