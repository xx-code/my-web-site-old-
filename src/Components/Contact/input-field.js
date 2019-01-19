import React from 'react';
import '../../Css/contact.css';

export const InputField = props => {
    const { name, placeholder, onChange, type, value } = props;
    return(
        <div className = "col-md-6 input-form">
            <input name = {name} placeholder = {placeholder} 
                onChange = {onChange} type = {type} value = {value}/>
        </div>
    )
}

export const InputLargeField = props => {
    const { name, rows, placeholder, onChange, value } = props;
    return(
        <div className = "col-md-12 input-form">
            <textarea className = "form-text-area" name = {name} 
                rows = {rows} placeholder = {placeholder}
                onChange = {onChange} value = {value} >
            </textarea>
        </div>
    )
}