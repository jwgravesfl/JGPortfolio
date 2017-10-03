import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import Header from './Header';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <AppBar
          title="J. Graves Portfolio"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          showMenuIconButton={false}/>
          <div className='row'>
            <div><Header className="col s12 m12" /></div>
            <div><Home className="col s12 m7" /></div>
            <div><About className="col s12 m5" /></div>
            <div><Portfolio className="col s12 m5" /></div>
            <div><Contact className="col s12 m5" /></div>
            <div><Footer className="col s12 m5" /></div>
          </div>

      </MuiThemeProvider>
    )
  }
}
