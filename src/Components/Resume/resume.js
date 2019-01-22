import React, { Component } from 'react';
import ResumeBox from './BoxResume';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isEmpty, isLoaded } from 'react-redux-firebase';
import '../../Css/resume.css';


class Resume extends Component{

    render(){
        const { resumes } = this.props

        let education;
        let work;

        if (!isLoaded(resumes)) {
            education =   <ResumeBox resumeTitle = "work" resume = {[]}/>
            work = <ResumeBox resumeTitle = "education" resume = {[]}/>               
        } else if(isEmpty(resumes)) {
            education = <div className = "col-12">
                            <p>Aucun education ou verifiez votre connexion internet</p>
                        </div>
            work = <div className = "col-12">
                            <p>Aucun work ou verifiez votre connexion internet</p>
                        </div>
        } else {

            let arrayEducation = [];
            let arrayWork = [];

            resumes.forEach((element) => {
                if(element.type === "education"){
                    arrayEducation.push(element)
                }else{
                    arrayWork.push(element)
                }
            })

            education =  <ResumeBox resumeTitle = "education" resume = {arrayEducation}/> 

            work = <ResumeBox resumeTitle = "work" resume = {arrayWork}/> 
        }

        return(
            <section id = "resume" className = "container-fluid">
                <div className = "title">
                    <h2><span>My</span> Resume</h2>
                </div>
                <div className = "container">
                    <div className = "row">
                        { education }
                        { work }
                    </div>
                </div>
            </section>
        )
    }
}


export default compose(
    firestoreConnect(() => ['Resume']), // or { collection: 'todos' }
    connect((state, props) => ({
      resumes: state.firestore.ordered.Resume
    }))
   )(Resume)