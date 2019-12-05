import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/navigation/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/test">
            Something here soon.....
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
