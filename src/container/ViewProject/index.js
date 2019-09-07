import React, {Component} from 'react';
import style from './style';
import NavBar from './components/navbar';
import DetailProject from './components/detailProject';
import PreviewProject from './components/previewProject';
import LinkProject from './components/linkProject';
import LinkGit from './components/linkGit';
import iconTemp from '../../utils/iconTemp.png';
import frameAndroid from '../../Images/androidFrame.jpg';
import LinkAppStore from '../../Images/appstore.jpg';
import LinkPlayStore from '../../Images/playstore.jpg';
import Radium from 'radium';
import firebase from 'firebase'
import {compose} from "redux";
import {firestoreConnect, isEmpty, isLoaded} from "react-redux-firebase";
import {connect} from "react-redux";
import {MainLoad} from "../../common/Loading";

class ViewProject extends Component {

    state = {
        project: {
            presentations: []
        }
    }

    componentDidMount() {
        firebase.firestore().collection('Project').doc(this.props.match.params.id).onSnapshot( doc => {
            this.setState({project: doc.data()})
            console.log(doc.data())
        })
    }

    render(){
        const { project } = this.state;

        return(
            <Radium.StyleRoot>
                <NavBar/>
                <div className= "container-fluid" style={style.container}>
                    <div className = "row">
                        <div className = "col-md-12 col-lg-6">
                            <DetailProject
                                icon = {project.logo}
                                detail = {project.detail}
                                title = {project.name}
                            />
                            <div style = {style.containerLink} >
                                <LinkProject
                                    index = {1}
                                    customStyle = {{marginRight: '10px'}}
                                    linkImg = {LinkPlayStore}
                                    href = {"lien app soto"}
                                />
                                <LinkProject
                                    index = {2}
                                    linkImg = {LinkAppStore}
                                    href = {null}
                                />
                            </div>
                            <div style={style.containerGit}>
                                <LinkGit
                                    href = {project.urlGit}
                                />
                            </div>
                        </div>
                        <div className = "col-md-12 col-lg-6" >
                            <PreviewProject
                                plateform = "app"
                                images = {project.presentations}
                            />
                        </div>
                    </div>
                </div>
            </Radium.StyleRoot>
        )
    }
}

export default ViewProject