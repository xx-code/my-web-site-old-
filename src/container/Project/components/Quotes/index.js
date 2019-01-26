import React from 'react';
// style
import style from './style';
import Radium from 'radium';
import Quote from './Quote';

const Quotes = ({quotes}) => {
    return(
        <div 
            id = "quote"
            style = {style.quote} 
            className = "container-fluid"> 
            <div className = "container">
                <div 
                    id = "carouselExampleControls" 
                    className="carousel slide" 
                    data-ride="carousel">
                    <div className="carousel-inner">
                    {
                        quotes.map( quote => {
                            return (
                                <Quote
                                    key = {quote.id}
                                    img = {quote.img}
                                    text = {quote.text}
                                    author = {quote.author} 
                                />
                            )
                        })
                    }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Radium(Quotes)