import React, { Component } from 'react';
import Main from './Main';
import ViewProject from './container/ViewProject';
// redux & firebase
import { Provider } from 'react-redux';
import {store, rrfProps} from './store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
// style
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
          <Router>
              <Route exact path = "/" component = {Main} />
              <Route exact path = "/:id" component = {ViewProject}/>
          </Router>
          </ReactReduxFirebaseProvider>            
      </Provider>
    );
  }
}

export default App;
