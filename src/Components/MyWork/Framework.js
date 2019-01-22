import React from 'react';
import '../../Css/my-work.css';


const FrameWork = (props) => {
    return(
        <div className = "col-xs-6 col-sm-4 frame-work">
            <div className = "frame-content">
                <a 
                    href = {props.element.url} 
                    rel="noopener noreferrer" 
                    target = "_blank">
                    <img 
                        src = {props.element.img} 
                        alt = "work"/>
                    <div className = "above-info">
                        <h4>{props.element.name}</h4>
                        <label>{props.element.type}</label>
                    </div>
                </a>
            </div> 
            
        </div>
    )
}

export default FrameWork