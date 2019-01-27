import React from 'react';
// component 
import ContactList from './components/ContactInfo';
import Messages from './components/MessageBox';
import { BigTitle } from '../../common/Title';
// data & firebase
import { Info } from '../../utils/StaticData';
// style 
import styles from './styles';
import Radium from 'radium';

const Contact = props => {
    return(
        <section 
            id = "contact"
            style = {styles.contact} 
            className = "container-fluid">
            <BigTitle title = {{first : 'Contact', second : 'Me'}} />
            <div className = "container">
                <div className = "row">
                    <Messages />
                    <div className = "col-md-6 col-xs-12">
                        <ContactList contacts = {Info}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Radium(Contact)