import React, { Component } from 'react';
import loading from '../../Images/loading.svg';
import '../../Css/about.css';
import { firebaseConnect } from 'react-redux-firebase';

class About extends Component{

    constructor(props){
        super(props)
        this.state = {
            profile : ""
        }
    }

    componentDidMount(){
        this.getProfile();
    }

    getProfile = () => {
        const { firebase : { storage } } = this.props;
        const storageRef = storage().ref();
        const img = storageRef.child('img_profile/pp_2.jpg');
        img.getDownloadURL().then(url => {
            this.setState({profile: url})
        })
    }

    render(){

        const { profile } = this.state;

        return(
            <section id = "about" className = "container-fluid about">
                <div className = "container"> 
                <div className = "row">
                    <div className = "col-xs-12 col-sm-5 img-about">
                        {
                            profile === "" ? (
                                <div className = "frame">
                                     <img 
                                        alt = "me" 
                                        className = "profile img-fluid" 
                                        src = {loading} />
                                </div>
                            ):(
                                <div className = "frame">
                                    <img 
                                        alt = "me" 
                                        className = "profile img-fluid" 
                                        src = {profile} />
                                </div>
                            )
                        }
                        
                    </div>
                    <div className = "col-xs-12 col-sm-7 text-about">
                        <h2>ABOUT <span>ME</span></h2>
                        <p>Auguste Tiemele jeune développeur informatique, ayant des compétences en programmation web et android/IOS.
                            Il a aquis ses compétences durant son parcours universitaire et ces heures intensives de recherche.</p>
                        <p>En tant que développeur informatique lorsqu'il n'est pas devant son écran, il fait beaucoup de sport. 
                            il aime la lecture, les jeux vidéos et les mangas.</p>
                        <p>Les techniques et language qu'il utilise sont : le javascript, reactjs, react native, firebase, SQL, noSQL et python</p>
                        <div className = "social-link">
                            <ul>
                                <li>
                                    <a 
                                        href = "https://www.instagram.com/roinujetsugua_sama/" 
                                        rel="noopener noreferrer" 
                                        target = "_blank">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href = "https://www.pinterest.fr/akaaugustejunior/" 
                                        rel="noopener noreferrer" 
                                        target = "_blank">
                                        <i className="fab fa-pinterest"></i>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href = "https://www.linkedin.com/in/junior-tiemle-324701160/" 
                                        rel="noopener noreferrer"
                                        target = "_blank">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className = "action-about">
                            <button className = "btn-lettalk">CONTACT ME</button>
                            <button className = "btn-lettalk">DOWNLOAD CV</button>
                        </div>
                    </div>
                </div>
                </div>
                
            </section>
        )
    }
}

export default firebaseConnect()(About)