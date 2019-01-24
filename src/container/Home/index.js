import React, {Component} from 'react';
import styles from './styles';
import NavBar from '../../layout/Navbar/index';
import Radium from 'radium';
import Background from './components/Background/index';
import { Button } from '../../common/Buttons/index';

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            imgWidth: 0,
            imgHeight: 0,
            width: 0,
            height: 0,
            topImg: 0,
            leftImg: 0
        }
    }

    componentDidMount(){
        this.ajustementImg();
        window.addEventListener("resize", this.ajustementImg);
    }

    ajustementImg = () => {
        let currentWidth = window.innerWidth;
        let currentHeight = window.innerHeight;
        let height = currentHeight;
        let width = currentWidth;
        
        this.setState({
            imgWidth: currentWidth, 
            imgHeight: currentHeight,
            height: height,
            width: width
        })
    }
    
    render(){
        const { imgWidth, 
                imgHeight, 
                topImg, 
                leftImg, 
                width, 
                height} = this.state;

        return(
            <React.Fragment>
                <Background 
                    imgHeight = {imgHeight} 
                    width = {width} 
                    height = {height} 
                    imgWidth = {imgWidth}
                    top = {topImg} 
                    left = {leftImg}
                /> 
                <NavBar />
                <section id = "home" 
                        style = {{ ...styles.home, 
                                    height: imgHeight }}>
                    <div className = "container" 
                        style = {styles.containerPerso}>  
                        <div>
                            <h3 style = {styles.homeTextH3}>Hello! i'm</h3>
                            <h2 style = {styles.homeTextH2}>Auguste Tiemele</h2>
                            <p style = {styles.homeTextP}>WEB DEVELOPMENT | DIGITAL MARKETING | MOBILE APPS</p>
                            <div style = {styles.wtAction}>
                                <Button title = "LET'S TALK NEW" />
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Radium(Home)