import React from 'react';
// style
import style from './style';
import Radium from 'radium';

const InputArea = props => {
    const { name, 
            rows, 
            placeholder, 
            onChange, 
            value } = props;
    return(
        <div 
            className = "col-md-12"
            style = {style.inputFormContent}>
            <textarea 
                style = {style.textArea}
                name = {name} 
                rows = {rows} 
                placeholder = {placeholder}
                onChange = {onChange} 
                value = {value}>
            </textarea>
        </div>
    )
}

export default Radium(InputArea)