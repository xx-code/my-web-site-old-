import React, { Component } from 'react';
import '../../Css/navbar.css';

export default class NavBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            toggle : "none"
        }
    }

    componentDidMount(){
        document.getElementById("homeTarget").classList.add("header-nav-active");
        window.addEventListener("resize", this.navAjustement);
        window.addEventListener("scroll", this.changeHeader);
        window.addEventListener("scroll", this.changeOnScroll);
    }

    changeHeader = () => {
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            document.getElementById('head').classList.add('header-scroll');
            document.getElementById('head').classList.remove('header');
            
        }else{
            document.getElementById('head').classList.add('header');
            document.getElementById('head').classList.remove('header-scroll');
        }
    }

    navAjustement = () => {
        let currentScreen = window.innerWidth;
        if(currentScreen > 793){
            document.getElementById('nav').style.display = "flex";
        }else{
            document.getElementById('nav').style.display = "none";
        }
    }

    toggleUp = () => {
        
        let currentScreen = window.innerWidth;

        if(currentScreen <= 764){
            if(this.state.toggle === "none"){
                this.setState({toggle: "flex"});
                document.getElementById('nav').style.display = "flex";
            }else{
                this.setState({toggle: "none"});
                document.getElementById('nav').style.display = "none";
            }
        }  
    }

    activeElement = (id) => {
        let itemNav = document.querySelectorAll("#nav li")
        itemNav.forEach(items => {
            items.classList.remove("header-nav-active")
        })

        document.getElementById(id).classList.add("header-nav-active");
    }

    changeOnScroll = () => {
        const sections = document.querySelectorAll("section")
        let index = sections.length;

        let itemNav = document.querySelectorAll("#nav li")

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        itemNav.forEach(items => {
            items.classList.remove("header-nav-active")
        })
        
        itemNav[index].classList.add('header-nav-active')
    }

    render(){
        return(
            <div id = "head" className = "navbar header">
                <div className = "header-logo">
                    <h1 className = "header-title">
                        <div>Auguste Tiemele</div>
                    </h1>
                    <div className = "header-toggle" onClick = {this.toggleUp} >
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
                
                <ul className = "header-nav" id = "nav">
                    <li id = "homeTarget">
                        <a 
                            href = "#home" 
                            onClick = {() => this.activeElement("homeTarget")}>
                            HOME
                        </a>
                    </li>
                    <li id = "aboutTarget">
                        <a 
                            href = "#about" 
                            onClick = {() => this.activeElement("aboutTarget")}>
                            ABOUT
                        </a>
                    </li>
                    <li id = "serviceTarget">
                        <a 
                            href = "#service" 
                            onClick = {() => this.activeElement("serviceTarget")}>
                            SERVICE
                        </a>
                    </li>
                    <li id = "resumeTarget">
                        <a 
                            href = "#resume" 
                            onClick = {() => this.activeElement("resumeTarget")}>
                            RESUME
                        </a>
                    </li>
                    <li id = "workTarget">
                        <a 
                            href = "#my_work" 
                            onClick = {() => this.activeElement("workTarget")}>
                            MY WORK
                        </a>
                    </li>
                    <li id = "contactTarget">
                        <a 
                            href = "#contact" 
                            onClick = {() => this.activeElement("contactTarget")}>
                            CONTACT
                        </a>
                    </li>
                </ul>                                                                     
            </div>
        )
    }
}