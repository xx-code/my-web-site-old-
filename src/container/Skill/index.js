import React from 'react';
//component
import Bar from './components/bar';
import { BigTitle } from '../../common/Title';
import { MainLoad } from '../../common/Loading';
// data & firebase
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isEmpty, isLoaded } from 'react-redux-firebase';
// styles
import style from './styles';
import Radium from 'radium';

const Skill = props => {

    const { skills } = props;

    let content;

    console.log(skills)

    if (!isLoaded(skills)) {
        content = <div className = "col-12">
                        <MainLoad />
                  </div> 
    } else if(isEmpty(skills)) {
        content =   <div className = "col-12">
                        <p>Verifiez votre connexion internet</p>
                    </div>
    } else if (!isEmpty(skills)) {
        console.log(skills)
        content = skills.map((item) => {
                    
                    return <Bar
                                key = {item.id}
                                skill = {item.name}  
                                pourcentage = {item.level}
                                icon =  {item.icon}
                            />
        })
    }

    return(
        <section
            name = "SKILLS"
            className = "container-fluid" 
            style = {style.skill}
        >
            <BigTitle title = {{first: 'My', second: 'Skills'}} />

            <div className = "container">
                {
                    content
                }
            </div>
            
        </section>
    )
}

export default compose(
    firestoreConnect(() => ['Skills']), // or { collection: 'todos' }
    connect((state, props) => ({
      skills: state.firestore.ordered.Skills
    }))
)(Radium(Skill))