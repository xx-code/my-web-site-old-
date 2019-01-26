import React from 'react';
// style
import style from './style';
import Radium from 'radium';

const Quote = props => {
    const { img,
            text,
            author } = props
    return(
        <div className={`carousel-item ${author === 'Voltaire' ? 'active' : ''}`}>
            <div style = {style.imgQuoteContent}>
                <img
                    style = {style.imgQuote} 
                    src = {img} 
                    alt = "think"/>
            </div>
            <div style = {style.quoteText}>
                <p>
                    {text}
                </p>
                <h4 style = {style.quoteTitle}>
                    - {author}
                </h4>
            </div>
        </div>
    )
}

export default Radium(Quote)