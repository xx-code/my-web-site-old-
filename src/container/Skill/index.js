import React from 'react';
//component
import Bar from './components/bar';
import { BigTitle } from '../../common/Title';
// styles
import style from './styles';
import Radium from 'radium';

const Skill = props => {
    return(
        <section
            name = "SKILLS"
            className = "container-fluid" 
            style = {style.skill}
        >
            <BigTitle title = {{first: 'My', second: 'Skills'}} /> 
            <div className = "container">
                <Bar   
                    skill = "JavaScript"
                    pourcentage = {90}
                />
            </div>
            
        </section>
    )
}

export default Radium(Skill)