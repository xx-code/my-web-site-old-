import React from 'react';
import style from './style';
import Radium from "radium";
import {isEmpty} from "react-redux-firebase";

const LinkGit = props => {
    const { href, customStyle } = props;
    return(
        <div style = {style.container}>
            <i className="fab fa-github" style = {style.icon}></i>
            <a
                href={href}
                style={[style.link, customStyle]}
                target="_blank"
                rel="noopener noreferrer"
                >
                <h3 style={style.linkTitle}>Lien Github</h3>
                {
                    isEmpty(href) ?    <div className="hoverNoValid" style = {style.hoverNoValid}>
                                            <samp style = {style.noValid}>Lien est prive impossible d'avoir le code</samp>
                                        </div>
                                  :
                                        ""
                }
            </a>
        </div>
    )
}

export default Radium(LinkGit)