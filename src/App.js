import React, { Component } from 'react';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Home from './components/Home.js';
import Header from './components/Header.js';
import './index.css'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Body from './components/Body.js';


class App extends Component {
  render() {
    return (
      <div className="main-content">
           <Router >
           <Header></Header>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Router>
      </div>
    );
  }
}
export default App;




{/* <ul>
<li>
  <Link to="/">Home</Link>
</li>
<li>
  <Link to="/register">Register</Link>
</li>
<li>
  <Link to="/login">Login</Link>
</li>
</ul> */}
