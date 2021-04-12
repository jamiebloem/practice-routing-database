import React from 'react';
import './App.css';
import Nav from './Nav';
import Mytodo from './Mytodo';
import About from './About';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <switch>
                    <Route path="/about" component={About}/>
                    <Route path="/todo" component={Mytodo}/>
                </switch>
            </div>
        </Router>
    );
}


export default App;
