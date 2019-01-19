import React from 'react';
import backImage from '../../Images/background.jpg';
import '../../Css/home.css';

const Background = (props) => {
    const {width, height, top, left, imgHeight, imgWidth} = props;
    return(
        <div className = "back" style = {{width: width, height: height}}>
            <div style = {{backgroundColor: "rgba(0, 0, 0, 0.6)",width: width, height: height, zIndex: -10}}></div>
            <img className = "img" width = {imgWidth} style = {{top: top, left: left}}
                height = {imgHeight} alt = "back" src = {backImage}/>
        </div>
    )
}

export default Background