import React from 'react';
import style from './style';
import NavBar from './components/navbar';
import Radium from 'radium';

const ViewProject = props => {
    return(
        <div>
            <NavBar/>
        </div>
    )
}

export default Radium(ViewProject)