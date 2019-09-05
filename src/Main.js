import React from 'react';
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

import Radium from 'radium';

import { quotes } from './utils/StaticData'

const Main = props => {
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

export default Main