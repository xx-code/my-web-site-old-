import React from 'react';
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

const ViewProject = props => {
    return(
        <Radium.StyleRoot>
            <NavBar/>
            <div className= "container-fluid" style={style.container}>
                <div className = "row">
                    <div className = "col-md-12 col-lg-6">
                        <DetailProject
                            icon = {iconTemp}
                            detail = "Itaque verae amicitiae difficillime reperiuntur in iis qui in honoribus reque publica versantur; ubi enim istum invenias qui honorem amici anteponat suo? Quid? Haec ut omittam, quam graves, quam difficiles plerisque videntur calamitatum societates! Ad quas non est facile inventu qui descendant. Quamquam Ennius recte.quam difficiles plerisque videntur calamitatum societates! Ad quas non est facile inventu qui descendant. Quamquam Ennius recte."
                            title = "The Brand"
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
                                href = "url"
                            />
                        </div>
                    </div>
                    <div className = "col-md-12 col-lg-6" >
                        <PreviewProject
                            plateform = "app"
                            images = {[frameAndroid, frameAndroid]}
                        />
                    </div>
                </div>
            </div>
        </Radium.StyleRoot>
    )
}

export default ViewProject