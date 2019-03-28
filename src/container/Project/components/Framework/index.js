import React from 'react';
// style 
import FrameWork from './Framework';

const FrameworkList = ({projects}) => {
    return(
        <React.Fragment>
        {
            projects.map((element) => {
                return (
                    <FrameWork
                        key = {element.id}
                        id = {element.id} 
                        url = {element.url}
                        img = {element.img}
                        name = {element.name}
                        type = {element.type}
                    />
                )
            })   
        }
        </React.Fragment>
    )
}

export default FrameworkList 