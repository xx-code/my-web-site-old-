import React from 'react';
import '../../Css/contact.css';

const CardInfo = (props) => {
    return(
        <div className = "contact-info">
            <i className = {props.icon}></i>
            <h4>{`${props.label}:`}</h4>
            <p>
                {`${props.text1}`}
                <br></br>
                {`${props.text2}`}
            </p>
        </div>
    )
}

export default CardInfo