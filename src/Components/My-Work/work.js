import React, { Component } from 'react';
import FrameWork from './framework';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isEmpty, isLoaded } from 'react-redux-firebase';
import load from '../../Images/loading.svg'
import '../../Css/my-work.css';

class Work extends Component{

    render(){

        const { projects } = this.props;

        console.log(isEmpty)
        let content;

        if (!isLoaded(projects)) {
            content = <div className = "col-12">
                            <img alt = "me" className = "img-fluid" src = {load}/>   
                      </div>               
        } else if(isEmpty(projects)) {
            content = <div className = "col-12">
                        <p>Aucun project ou verifiez votre connexion internet</p>
                      </div>
        } else if (!isEmpty(projects)){
            content =  projects.map((element, index) => {
                return <FrameWork key = {index} element = {element}/>
            })
        }

        return(
            <section id = "my_work" className = "container-fluid">
                <div className = "title">
                    <h2><span>My</span> Portfolio</h2>
                </div>
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
}


export default compose(
    firestoreConnect(() => ['Project']), // or { collection: 'todos' }
    connect((state, props) => ({
      projects: state.firestore.ordered.Project
    }))
   )(Work)