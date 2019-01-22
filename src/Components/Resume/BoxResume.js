import React from 'react';
import '../../Css/resume.css';
import loading from '../../Images/loading.svg';

const ResumeBox = (props) => {
    const { resumeTitle, resume } = props;
    return(
        <div className = "col-xs-12 col-sm-6 resume-frame">
            <div className = "resume-box">
                <h4>{resumeTitle}</h4>
                {
                    resume.length > 0 ?
                        resume.map((element, index) => {
                            return(
                                <div className = "resume-row" key = {index}>
                                    <h5>{element.title}</h5>
                                    <label>{`${element.date_start} ${element.date_end}`}</label>
                                    <p>{element.detail}</p>
                                </div>
                            )
                        })              
                                        :
                        <div>
                            <img alt = "me" className = "img-fluid" src = {loading}/>
                        </div>
                }
            </div>
        </div>
    )
}

export default ResumeBox