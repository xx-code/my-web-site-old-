import React, { Component } from 'react';
import CardInfo from './card-contact';
import SendMeMessage from './send-me-message';
import { Info } from '../../temp/data';
import '../../Css/contact.css';

export default class Contact extends Component{
    render(){

        return(
            <section id = "contact" className = "container-fluid">
                <div className = "title">
                    <h2>Contact <span>Me</span></h2>
                </div>
                <div className = "container">
                    <div className = "row">
                        <SendMeMessage/>
                        <div className = "col-md-6 col-xs-12">
                        {
                            Info.map((element, index) => {
                                return(
                                    <CardInfo key = {index} icon = {element.icon} label = {element.label} text1 = {element.text1} text2 = {element.text2}/>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}