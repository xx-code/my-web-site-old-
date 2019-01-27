import React, { Component } from 'react';
// componemt
import { InputField, 
         InputArea } from '../../../../common/Input';
import { PrimaryButton } from '../../../../common/Buttons'
// style
import style from './style';
import Radium from 'radium';

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

        const { name, 
                email, 
                website, 
                message, 
                phone } = this.state;

        return(
        <form
            style = {style.myForm}
            className = "col-md-6 col-xs-12">
            <div className = "container">
                <div className = "row">
                    <InputField 
                        name = "name" 
                        placeholder = "Noms"
                        value = {name}
                        onChange = {this.handleInput}
                    />
                    <InputField 
                        name = "email" 
                        placeholder = "Email"
                        value = {email} 
                        type = "email"
                        onChange = {this.handleInput}
                    />
                </div>
                <div className = "row">
                    <InputField 
                        name = "phone" 
                        placeholder = "Telephone"
                        type = "phone" 
                        value = {phone}
                        onChange = {this.handleInput}
                    />
                    <InputField 
                        name = "website" 
                        placeholder = "Website"
                        value = {website}
                        onChange = {this.handleInput}
                    />
                </div>
                <div className = "row">
                    <InputArea 
                        name = "message" 
                        rows = {7} 
                        value = {message}
                        placeholder = "Votre message" 
                        onChange = {this.handleInput}
                    />
                </div>
                <div className = "row">
                    <div
                        style = {style.btnMessage} 
                        className = "col-md-12">
                        <PrimaryButton
                            title = "submit"
                            onClick = {this.submit} 
                        />
                    </div>
                </div>
            </div>
            
        </form>)
    }
    
}

export default Radium(SendMeMessage)