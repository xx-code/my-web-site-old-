import React from 'react';
// style
import style from './style';
import Radium from 'radium';

const InputField = props => {
    const { name, 
            placeholder, 
            onChange, 
            type, 
            value } = props;
    return(
        <div
            style = {style.inputFormContent} 
            className = "col-md-6">
            <input 
                name = {name}
                style = {style.inputForm} 
                placeholder = {placeholder} 
                onChange = {onChange} 
                type = {type} 
                value = {value}
            />
        </div>
    )
}

export default Radium(InputField)