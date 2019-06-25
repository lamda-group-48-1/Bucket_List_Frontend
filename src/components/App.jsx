import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home/home';
import Auth from './Auth/auth';
import { store } from '../store';


const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Auth} />
    </div>
  </Router>
);

export default App;
