import React, {Component} from 'react';
// contenair & component
import Home from './container/Home';
import About from './container/About';
import Service from './container/Service';
import Resume from './container/Resume';
import CallMe from './container/Resume/components/CallMe';
import Work from './container/Project';
import Quotes from './container/Project/components/Quotes';
import Contact from './container/Contact';
import Skill from './container/Skill';
import Footer from './layout/Footer';
import LoadingPage from './common/PageLoading';

import Radium from 'radium';

import { quotes } from './utils/StaticData'

class Main extends Component {
    state = {
        loading: true
    }

    componentDidMount() {
        if(!window.onload){
            setTimeout(() => this.setState({loading: false}), 3000)
        }
    }

    renderPage = () => {
        return(
            <Radium.StyleRoot>
                <Home />
                <About />
                <Service />
                <Resume />
                <CallMe />
                <Skill />
                <Work />
                <Quotes quotes = {quotes}/>
                <Contact />
                <Footer />
            </Radium.StyleRoot>
        )
    }

    renderLoadingPage = () => {
        return <LoadingPage />
    }


    render(){
        const { loading } = this.state;

        if(loading){
            return this.renderLoadingPage()
        } else {
            return this.renderPage()
        }
    }
}

export default Main