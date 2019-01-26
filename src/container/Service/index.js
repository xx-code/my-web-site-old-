import React from 'react';
//component
import ServicesBoxList from './components/ServicesBox/ServicesBoxList';
import { services } from '../../utils/StaticData';
import { BigTitle } from '../../common/Title'
// styles
import style from './styles';
import Radium from 'radium';


const Services = props => {
    return(
        <section 
            id = "service" 
            className = "container-fluid"
            style = {style.services} >
            <div>
                <BigTitle title = {{first : 'My', second : 'services'}} />
                <div className = "container">
                    <div className = "row">
                        <ServicesBoxList services = {services} />
                    </div>
                </div>
            </div>
        </section>
    )   
}

export default Radium(Services)