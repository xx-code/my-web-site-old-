import React from 'react';
// component 
import ContactList from './components/ContactInfo';
import Messages from './components/MessageBox';
import { BigTitle } from '../../common/Title';
// data & firebase
import { Info } from '../../utils/StaticData';
import { firestoreConnect } from 'react-redux-firebase';
// style 
import styles from './styles';
import Radium from 'radium';

const Contact = props => {

    const addContact = (data) => {
        const { firestore } = props;
        firestore.add({ collection : 'Contact' }, data).then(() => {
            alert(
                'le contact envoyer'
            );
        })
    }

    return(
        <section 
            name = "CONTACT"
            style = {styles.contact} 
            className = "container-fluid">
            <BigTitle title = {{first : 'Contact', second : 'Me'}} />
            <div className = "container">
                <div className = "row">
                    <Messages addNewContact = {addContact}/>
                    <div className = "col-md-6 col-xs-12" style = {styles.contactList}>
                        <ContactList contacts = {Info}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default firestoreConnect()(Radium(Contact))