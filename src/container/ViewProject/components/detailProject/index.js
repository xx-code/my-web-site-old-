import React from 'react';
import style from './style';
import Radium from "radium";

/**
 *
 * @icon string
 */
const DetailProject = props => {

    const { icon,
            title,
            detail} = props;

    return(
        <div>
            <div style={style.titleContainer}>
                <img
                    alt = "logo"
                    src = {icon}
                    style = {style.icon}
                />
                <div>
                    <h1 style={style.title}>
                        {title}
                    </h1>
                    <div style = {style.bar} />
                </div>
            </div>
            <p style={style.detail}>
                {detail}
            </p>
        </div>
    )
}

export default Radium(DetailProject)