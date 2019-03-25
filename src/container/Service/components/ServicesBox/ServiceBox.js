import React from 'react';
// styles
import style from './style';
import Radium from 'radium'

const ServiceBox = (props) => {
    const { icon, 
            text, 
            title } = props;
    return(
        <div 
            className = "col-md-4"
            style = {style.frameService}>
            <div style = {style.serviceBox} >
                <div>
                    <span style = {style.icon}>
                        <i 
                            style = {style.IconSub} 
                            className={icon}>
                        </i>
                    </span>
                </div>
                <h4 style = {style.serviceBoxH4} >{title}</h4>
                <div>
                    <p>{text}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Radium(ServiceBox) 