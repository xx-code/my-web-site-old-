import React from 'react';
// styles
import style from './style';
import Radium from 'radium';

const Title = props => {
    return(
        <React.Fragment>
            <h3 style = {style.homeTextH3}>Hello! i'm</h3>
            <h2 style = {style.homeTextH2}>Auguste Tiemele</h2>
            <p style = {style.homeTextP}>WEB DEVELOPMENT | DIGITAL MARKETING | MOBILE APPS</p>
        </React.Fragment>
    )
}

export default Radium(Title)