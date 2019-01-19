import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/home';
import About from './Components/about/about';
import Service from './Components/My-Service/services';
import Resume from './Components/Resume/resume';
import CallMe from './Components/Resume/call-me';
import Work from './Components/My-Work/work';
import Quotes from './Components/My-Work/quotes';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
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
