import React, {Component} from 'react';
import style from './style';
import NavBar from './components/navbar';
import DetailProject from './components/detailProject';
import PreviewProject from './components/previewProject';
import LinkProject from './components/linkProject';
import LinkGit from './components/linkGit';
import PageLoading from '../../common/PageLoading';
import LinkAppStore from '../../Images/appstore.jpg';
import LinkPlayStore from '../../Images/playstore.jpg';
import LinkWeb from '../../Images/web.jpg'
import Radium from 'radium';
import firebase from 'firebase'

class ViewProject extends Component {

    state = {
        project: {
            presentations: [],
        },
        loading: true
    }

    componentDidMount() {
        setTimeout(this.getProject, 3000)
    }

    getProject = () => {
        firebase.firestore().collection('Project').doc(this.props.match.params.id).onSnapshot( doc => {
            this.setState({project: doc.data(), loading: false})
        })
    }


    renderLoadingPage = () =>{
        return <PageLoading />;
    }

    renderProject = (project) => {
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
                                {
                                    project.type === 'web' ? <LinkProject
                                                                index = {1}
                                                                linkImg = {LinkWeb}
                                                                href = {project.urlPlayStore}
                                                            />
                                                           :
                                                            <React.Fragment>
                                                                <LinkProject
                                                                    index = {1}
                                                                    customStyle = {{marginRight: '10px'}}
                                                                    linkImg = {LinkPlayStore}
                                                                    href = {project.urlPlayStore}
                                                                />
                                                                <LinkProject
                                                                    index = {2}
                                                                    linkImg = {LinkAppStore}
                                                                    href = {project.urlAppStore}
                                                                />
                                                            </React.Fragment>

                                }
                            </div>
                            <div style={style.containerGit}>
                                <LinkGit
                                    href = {project.urlGit}
                                />
                            </div>
                        </div>
                        <div className = "col-md-12 col-lg-6" >
                            <PreviewProject
                                plateform = {project.type}
                                images = {project.presentations}
                            />
                        </div>
                    </div>
                </div>
            </Radium.StyleRoot>
        )
    }

    render(){
        const { project, loading } = this.state;

        if(loading) {
            return this.renderLoadingPage()
        } else {
            return this.renderProject(project)
        }
    }
}

export default ViewProject