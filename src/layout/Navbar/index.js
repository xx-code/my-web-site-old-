import React, { Component } from 'react';
// image
import Logo from '../../common/Logo/index';
// components
import NavLink from './components/NavLink/index';
// date & firebase
import { linkValue } from '../../utils/StaticData';
// style
import styles from './styles';
import Radium from 'radium';

class NavBar extends Component{

    constructor(props){
        super(props)
        this.state = {
            toggle : "none",
            navValue : linkValue,
            isScroll : false
        }
    }

    componentDidMount(){
        document.getElementById("homeTarget").classList.add("header-nav-active");
        window.addEventListener("resize", this.navAjustement);
        window.addEventListener("scroll", this.changeHeader);
        window.addEventListener("scroll", this.changeOnScroll);
    }

    changeHeader = () => {
        const {navValue} = this.state;
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            navValue.forEach(link => link.isScroll = true);
            this.setState({isScroll : true, navValue : linkValue})
        }else{
            linkValue.forEach(link => link.isScroll = false);
            this.setState({isScroll : false, navValue : linkValue})
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
        const {navValue} = this.state;
        navValue.forEach(link => {
            if(link.id === id ){
                link.isActive = true;
            }else{
                link.isActive = false;
            }
        })

        this.setState({navValue : navValue});
    }

    changeOnScroll = () => {
        const sections = document.querySelectorAll("section")
        let index = sections.length;
        
        const {navValue} = this.state;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navValue.forEach(items => {
            items.isActive = false;
        })
        
        navValue[index].isActive = true;

        this.setState({navValue : navValue})
    }

    render(){

        const { navValue, 
                isScroll } = this.state;

        return(
            <div 
                className = "navbar" 
                style = {!isScroll ? styles.header : styles.headerScroll}>
                <Logo 
                    logoName = "Auguste Tiemele"
                    isScroll = {isScroll}
                    toggleUp = {this.toggleUp}
                 />
                <ul 
                    style = {styles.headerNav} 
                    id = "nav">
                    {
                        navValue.map(link => {
                            return( 
                                <NavLink
                                    key = {link.id}
                                    id = {link.id}
                                    link = {link.link}
                                    title = {link.tilte}
                                    isActive = {link.isActive}
                                    isScroll = {link.isScroll}
                                    onClick = {() => this.activeElement(link.id)}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Radium(NavBar)