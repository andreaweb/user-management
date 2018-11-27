import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Aside from '../common/Aside/Aside.jsx';
import UserDetails from './UserDetails/UserDetails.jsx';
import GroupDetails from './GroupDetails/GroupDetails.jsx';
import NewUser from './NewUser/NewUser.jsx';
import NewGroup from './NewGroup/NewGroup.jsx';
import Home from './Home/Home.jsx';
import './App.scss';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Aside />
          <Switch>
            <Route exact path="/" render={()=><Home/>}/>
            <Route exact path="/group-details" render={()=><GroupDetails/>}/>
            <Route exact path="/user-details" component={UserDetails}/>
            <Route exact path="/new-group" render={()=><NewGroup/>}/>
            <Route exact path="/new-user" component={NewUser}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
