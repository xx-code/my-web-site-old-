import React from 'react';
// component
import CardInfo from './CardContact';

const ContactList = ({contacts}) => {
    return(
        <React.Fragment>
        {
            contacts.map((element) => {
                return(
                    <CardInfo 
                        key = {element.id} 
                        icon = {element.icon} 
                        label = {element.label} 
                        text1 = {element.text1} 
                        text2 = {element.text2}
                    />
                )
            })
        }
        </React.Fragment> 
    )
}

export default ContactList