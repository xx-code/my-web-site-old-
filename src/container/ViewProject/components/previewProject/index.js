import React from 'react';
import style from './style';
import Radium from "radium";

const PreviewProject = props => {

    const { images, plateform } = props;

    return(
        <div className = "d-flex row  justify-content-center">
            {
                images.map((item, index) => {
                    return(
                        <div
                            key = {index}
                            style = {plateform === 'web' ? {} : style.firstPresent}>
                            <img
                                alt = "presentation"
                                src = {item}
                                style = {style.img}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Radium(PreviewProject)