import React from 'react';
import { MainLoad } from '../Loading';
import style from './style';
import Radium from "radium";

const PageLoading = props => {
    return(
        <div style = {style.pageLoading}>
            <MainLoad />
        </div>
    )
}

export default Radium(PageLoading)