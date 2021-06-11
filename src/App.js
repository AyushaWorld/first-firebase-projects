import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Authantication from './Components/Authantication';
import Navigation from './Components/Navigation';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/login" component= {Authantication} />
          {/* <Route path="/" component= {Navigation} />  */}
        </Switch>
      </BrowserRouter>
    )
  }
}

