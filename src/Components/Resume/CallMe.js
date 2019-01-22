import React, { Component } from 'react';
import '../../Css/resume.css';

export default class CallMe extends Component{
    render(){
        return(
            <div id = "callme" className = "container-fluid">
                <div className = "container callme-box">
                    <h2>JE SUIS DISPONIBLE EN TANT QUE FREELANCE</h2>
                    <a className = " btn-white" rel="noopener noreferrer"  href = "https://www.malt.fr/profile/augustetiemele" target = "_blank">TRAVAILLONS ENSEMBLE</a>
                </div>
            </div>
        )
    }
}