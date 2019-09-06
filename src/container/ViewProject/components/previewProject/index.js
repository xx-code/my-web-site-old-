import React from 'react';
import style from './style';
import frameIphone from '../../../../Images/iphoneFrame.jpg';
import framePc from '../../../../Images/pcFrame.jpg'
import home from '../../../../utils/home.png';
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