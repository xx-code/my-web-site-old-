import React from 'react';
// components
import { BigTitle } from '../../common/Title';
import ResumeBox from './components/BoxResume';
// data & firebase
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isEmpty, isLoaded } from 'react-redux-firebase';
// styles
import styles from './styles';
import Radium from 'radium';


const  Resume = props => {

    const verification = (title, resume) => {
        let content;

        if (!isLoaded(resumes)) {
            content =   <ResumeBox 
                            resumeTitle = {title}
                            resume = {[]}
                          />             
        } else if(isEmpty(resumes)) {
            content =   <div className = "col-12">
                            <p>Aucun element {title} ou verifiez votre connexion internet</p>
                        </div>
        } else {
            
            content =  <ResumeBox 
                            resumeTitle = {title}
                            resume = {resume.filter(item => item.type === title)}
                        /> 
        }
        
        return content;
    }
   
    const { resumes } = props;

    let education = verification('education', resumes);
    let work = verification('work', resumes);

    return(
        <section 
            id = "resume" 
            className = "container-fluid"
            style = {styles.resume}>
            <BigTitle title = {{first: 'My', second: 'Resume'}} />
            <div className = "container">
                <div className = "row">
                    { education }
                    { work }
                </div>
            </div>
        </section>
    )

}


export default compose(
    firestoreConnect(() => ['Resume']), // or { collection: 'todos' }
    connect((state, props) => ({
      resumes: state.firestore.ordered.Resume
    }))
)(Radium(Resume))
