import React, { Component } from 'react';
import './App.css';
//import Home from './Components/Home/Home'
import Home from './container/Home';
import About from './container/About';
import Service from './container/Service';
import Resume from './container/Resume';
import CallMe from './container/Resume/components/CallMe';
import Work from './container/Project';
import Quotes from './container/Project/components/Quotes';
import Contact from './Components/Contact/Contact';
import Footer from './layout/Footer';
import Radium from 'radium';
import { Provider } from 'react-redux';
import {store, rrfProps} from './store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { quotes } from './utils/StaticData';

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
