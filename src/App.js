import React from 'react';
import './Home.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './view/home';
import About from './view/about';
import Projects from './view/projects';
import Contact from './view/contact';

function App() {
  return (

      <Router>
          <Switch>
              <Route exact path="/" component={() => <Home/>}/>
              <Route exact path="/about" component={() => <About/>}/>
              <Route exact path="/project" component={() => <Projects/>}/>
              <Route exact path="/contact" component={() => <Contact/>}/>
          </Switch>
      </Router>
  );
}

export default App;
