import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Service from './Components/MyService/Services';
import Resume from './Components/Resume/Resume';
import CallMe from './Components/Resume/CallMe';
import Work from './Components/MyWork/Work';
import Quotes from './Components/MyWork/Quotes';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { Provider } from 'react-redux';
import {store, rrfProps} from './store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
            <Home/>
            <About/>
            <Service/>
            <Resume/>
            <CallMe/>
            <Work/>
            <Quotes/>
            <Contact/>
            <Footer/>
          </ReactReduxFirebaseProvider>            
      </Provider>
    );
  }
}

export default App;
