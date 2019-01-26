import React from 'react';
// components
import ServiceBox from './ServiceBox';
// style 
import Radium from 'radium'

const ServiceBoxList = ({services}) => {
    return (
        <React.Fragment>
        {
            services.map((element) => {
                return(
                    <ServiceBox 
                        key = {element.id} 
                        icon = {element.icon} 
                        text = {element.text} 
                        title = {element.title}
                    />
                )
            })
        }
        </React.Fragment>
    )
}

export default Radium(ServiceBoxList)