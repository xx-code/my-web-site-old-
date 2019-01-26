import React from 'react';
// style
import style from './style'
import Radium from 'radium';

const BigTitle = ({title}) => {
    return(
        <div style = {style.title} >
            <h2 style = {style.titleH2} ><span style = {style.titleSpan} >{title.first}</span> {title.second}</h2>
        </div>
    )
}

export default Radium(BigTitle)