import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/navigation/NavBar';
import Loading from './components/Loading';
import Home from './pages/Home';
const TestDriver = React.lazy(() => import('./pages/TestDriver'));

function App() {
    return (
        <div className="App">
            <React.Suspense fallback={<Loading />}>
                <Router>
                    <Nav />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/test">
                            <TestDriver />
                        </Route>
                    </Switch>
                </Router>
            </React.Suspense>
        </div>
    );
}

export default App;
