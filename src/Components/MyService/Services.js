import React from 'react';
import ServiceBox from './Box';
import { services } from '../../temp/data';
import '../../Css/my-service.css';

const  Services =  () => {
    return(
        <section id = "service" className = "container-fluid">
            <div className = "service-content">
                <div className = "title">
                    <h2><span>My</span> services</h2>
                </div>
                <div className = "container">
                    <div className = "row">
                        {
                            services.map((element, index) => {
                                return(
                                    <ServiceBox 
                                        key = {index} 
                                        icon = {element.icon} 
                                        text = {element.text} 
                                        title = {element.title}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services 