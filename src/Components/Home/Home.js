import React, { Component } from 'react';
import NavBar from '../../Layout/NavBar';
import Background from './Background';
import '../../Css/home.css';

export default class Home extends Component{
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
        

        this.setState(prevState => {
            return({
                imgWidth: currentWidth, 
                imgHeight: currentHeight,
                height: height,
                width: width
            })
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
                <section id = "home" style = {{height: imgHeight}}>
                    <div className = "container container-perso">  
                        <div className = "home-text">
                            <h3>Hello! i'm</h3>
                            <h2>Auguste Tiemele</h2>
                            <p>WEB DEVELOPMENT | DIGITAL MARKETING | MOBILE APPS</p>
                            <div className = "wt-action">
                                <button className = "btn-lettalk">LET'S TALK NEW</button>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
