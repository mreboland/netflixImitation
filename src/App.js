import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Catalogue from "./Catalogue.js";
import SingleMovie from "./SingleMovie.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>This is the start of netflix hax</h1>
          <header>
            <h1>here will contain background image of selected movie along with details</h1>
            <Route path="/movie/:id" component={ SingleMovie }/>
            <nav>
              <Link to="/">Catalogue</Link>
            </nav>
          </header>
        </div>
        <Route exact path="/" component={Catalogue}/>
      </Router>
    );
  }
}

export default App;
