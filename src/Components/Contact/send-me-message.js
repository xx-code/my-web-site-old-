import React, { Component } from 'react';
import { InputField, InputLargeField } from './input-field';
import '../../Css/contact.css';

class SendMeMessage extends Component {

    constructor(props){
        super(props)
        this.state = {
            name : "",
            email : "",
            phone : "",
            website : "",
            message : ""
        }
    }

    submit = (event) => {
        event.preventDefault();
        this.props.addNewContact(this.state)
        this.setState({
            name : "",
            email : "",
            phone : "",
            website : "",
            message : ""
        })
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render(){

        const { name, email, website, message, phone } = this.state;

        return(
        <form className = "col-md-6 col-xs-12 my-form">
            <div className = "container">
                <div className = "row">
                    <InputField name = "name" placeholder = "Noms"
                        value = {name}
                        onChange = {this.handleInput}/>
                    <InputField name = "email" placeholder = "Email"
                        value = {email} type = "email"
                        onChange = {this.handleInput}/>
                </div>
                <div className = "row">
                    <InputField name = "phone" placeholder = "Telephone"
                        type = "phone" value = {phone}
                        onChange = {this.handleInput}/>
                    <InputField name = "website" placeholder = "Website"
                        value = {website}
                        onChange = {this.handleInput}/>
                </div>
                <div className = "row">
                    <InputLargeField name = "message" rows = {7} value = {message}
                        placeholder = "Votre message" onChange = {this.handleInput}/>
                </div>
                <div className = "row">
                    <div className = "col-md-12 form-btn">
                        <button className = "btn-send-message" onClick = {this.submit}>Envoyer</button>
                    </div>
                </div>
            </div>
            
        </form>)
    }
    
}

export default SendMeMessage