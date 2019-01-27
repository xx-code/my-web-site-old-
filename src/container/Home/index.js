import React, {Component} from 'react';
// Components
import Title from './components/Title';
import Background from './components/Background';
import { PrimaryButton } from '../../common/Buttons';
// Layout
import NavBar from '../../layout/Navbar';
// styles
import styles from './styles';
import Radium from 'radium';

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
                <section 
                        name = "HOME"
                        style = {{ ...styles.home, 
                                    height: imgHeight }}>
                    <div className = "container" 
                        style = {styles.containerPerso}>  
                        <div style = {styles.textAbout}>
                            <Title />
                            <div style = {styles.wtAction}>
                                <PrimaryButton title = "LET'S TALK NEW" />
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Radium(Home)