import React from 'react';
import style from './style';
import Radium from "radium";
import {isEmpty} from "react-redux-firebase";
import './style.css'


const LinkProject = props => {
    const { linkImg, href, customStyle, index } = props;
    return(
        <a
            id={`index${index}`}
            href={href}
            style={[style.link, customStyle]}
            target="_blank"
        >
            <img
                alt = "link"
                src = {linkImg}
                style={style.img} />
            {
                isEmpty(href) ?    <div className="hoverNoValid" style = {style.hoverNoValid}>
                                        <samp style = {style.noValid}>Lien indisponible pour le moment</samp>
                                    </div>
                              :
                                    <div className="hoverValid" style = {style.hoverValid}/>
            }
        </a>
    )
}

export default Radium(LinkProject)