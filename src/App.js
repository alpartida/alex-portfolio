import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from "react-router-dom"
import Blog from "./components/Blog"
import LandingPage from "./components/LandingPage"
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path= "/blog" component={Blog}/>
        <Route exact path= "/" component={LandingPage}/>
        <Route path= "/resume" component={Resume}/>
        <Route path= "/portfolio" component={Portfolio}/>
      </Switch>
    </div>
  );
}

export default App;
