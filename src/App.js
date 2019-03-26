import React, { Component } from 'react';
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
// redux & firebase
import { Provider } from 'react-redux';
import {store, rrfProps} from './store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
// data
import { quotes } from './utils/StaticData';
// style
import './App.css';
import Radium from 'radium';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
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
          </ReactReduxFirebaseProvider>            
      </Provider>
    );
  }
}

export default App;
