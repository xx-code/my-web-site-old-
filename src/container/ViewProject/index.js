import React from 'react';
import style from './style';
import NavBar from './components/navbar';
import DetailProject from './components/detailProject';
import PreviewProject from './components/previewProject';
import iconTemp from '../../utils/iconTemp.png';
import frameAndroid from '../../Images/androidFrame.jpg';
import framePc from '../../Images/pcFrame.jpg';
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