import React from 'react';
// image
import backImage from '../../../../images/background.jpg';
// style
import styles from './styles';
import Radium from 'radium';

const Background = (props) => {
    const { width, 
            height, 
            top, 
            left, 
            imgHeight, 
            imgWidth} = props;
    return(
        <div 
            style = {{ ...styles.back,
                       width: width,
                       height: height }}>
            <div 
                style = {{ backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            width: width, 
                            height: height, 
                            zIndex: -10}}>
            </div>
            <img 
                width = {imgWidth} 
                style = {{ ...styles.img,  
                           top: top,
                           left: left }}
                height = {imgHeight} 
                alt = "back" 
                src = {backImage}/>
        </div>
    )
}

export default Radium(Background)
