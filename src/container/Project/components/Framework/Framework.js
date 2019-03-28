import React from 'react';
import style from './style'
import Radium from 'radium';

const mouseEnter = id => {
    document.querySelector(`.${id}`).style.visibility = 'visible'
}
const mouseLeave = id => {
    document.querySelector(`.${id}`).style.visibility = 'hidden'
}

const Framework = props => {

    const { url,
            img,
            name,
            id } = props;

    return(
        <div
            style = {style.frameWork} 
            className = "col-sm-12 col-md-4">
                <h3 style = {style.title}>{name}</h3>
                <div style = {style.linkFrame} 
                    onMouseEnter = {() => mouseEnter(`img${id}`)}
                    onMouseLeave = {() => mouseLeave(`img${id}`)}>
                    <div className = {`img${id} img-fluid`} style = {style.background} >
                        <a 
                            style = {style.link}
                            href = {url} 
                            rel="noopener noreferrer" 
                            target = "_blank">
                            {`Allez sur: ${url}`}
                        </a>
                    </div>
                    <img
                        className = "img-fluid"
                        style = {style.frameImage}
                        src = {img}
                        alt = {name}
                    />
                </div>
        </div>
    )
}

export default Radium(Framework)