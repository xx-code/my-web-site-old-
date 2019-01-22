import React from 'react';
import '../../Css/my-service.css';

const ServiceBox = (props) => {
    const { icon, 
            text, 
            title } = props;
    return(
        <div className = "col-sm-4 frame-service">
            <div className = "service-box">
                <div className = "subtitel">
                    <span className = "icon"><i className={icon}></i></span>
                </div>
                <h4>{title}</h4>
                <div>
                    <p>{text}</p>
                </div>
            </div>
            
        </div>
    )
}

export default ServiceBox