import React from 'react';
// style
import style from './style';
import Radium from 'radium';

const RowResume = props => {

    const { title,
            date_start,
            date_end,
            detail } = props;

    return(
        <div>
            <h5 style = {style.resumeRowTitle}>{title}</h5>
            <label style = {style.resumeRowLabel}>{`${date_start} ${date_end}`}</label>
            <p style = {style.resumeRowText}>{detail}</p>
        </div>
    )
}

export default Radium(RowResume)