import React from 'react';
// component
import { BigTitle } from '../../common/Title';
import FramWorkList from './components/Framework';
import { MainLoad } from '../../common/Loading';
// data & firebase
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isEmpty, isLoaded } from 'react-redux-firebase';
// style
import styles from './styles';

const Work = props => {

    const {projects} = props;

    let content;

    if (!isLoaded(projects)) {
        content = <div className = "col-12">
                        <MainLoad /> 
                    </div>               
    } else if(isEmpty(projects)) {
        content = <div className = "col-12">
                    <p>Aucun project ou verifiez votre connexion internet</p>
                    </div>
    } else if (!isEmpty(projects)){
        content =  <FramWorkList projects = {projects} />
    }

    return(
        <section 
            id = "my_work"
            style = {styles.myWork} 
            className = "container-fluid">
            <BigTitle title = {{first : 'My', second : 'portofolio'}} />
            <div className = "container">
                <div className = "row">
                    {
                        content
                    }
                </div>
            </div>
        </section>
    )
}


export default compose(
    firestoreConnect(() => ['Project']), // or { collection: 'todos' }
    connect((state, props) => ({
      projects: state.firestore.ordered.Project
    }))
)(Work)