import React from 'react';
import Auth from '../src/components/Auth/auth';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../src/assets/css/App.css';



function App() {
  return (
    <Router >
    <div className="App">
      <header className="App-header">
      
        <Route path="/" component={Auth}/>
        
      </header>
    </div>
    </Router>
  );
}

export default App;
