import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Navigation from './Component/Navigation';
import Portfolio from './Component/Portfolio';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Route exact={true} path={'/'} component={Home} />
        <Route exact={true} path={'/about'} component={About} />
        <Route exact={true} path={'/portfolio'} component={Portfolio} />
        <Route exact={true} path={'/contact'} component={Contact} />
      </div>
    );
  }
}

export default App;
