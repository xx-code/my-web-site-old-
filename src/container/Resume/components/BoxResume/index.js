import React from 'react';
// component
import RowResume from './RowResume';
import { MainLoad } from '../../../../common/Loading';
// style
import style from './style';
import Radium from 'radium';

const ResumeBox = (props) => {
    const { resumeTitle, resume } = props;
    return(
        <div 
            className = "col-xs-12 col-sm-6"
            style = {style.resumeFrame}>
            <div style = {style.resumeBox}>
                <h4 style = {style.resumeBoxTitle}>{resumeTitle}</h4>
                {
                    resume.length > 0 ?
                        resume.map((element) => {
                            return( 
                                <RowResume
                                    id = {element.id} 
                                    title = {element.title}
                                    date_end = {element.date_end}
                                    date_start = {element.date_start}
                                    detail = {element.detail}
                                />
                            )
                        })              
                                        :
                        <MainLoad />
                }
            </div>
        </div>
    )
}

export default Radium(ResumeBox)