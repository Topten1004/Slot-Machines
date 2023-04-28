import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Main from './components/Main'
import './App.css'

class App extends Component {
  render() {
    return (
        <Router>
          <>
            <Route exact path="/" component={Main} />
          </>
        </Router>
    )
  }
}

export default App;
