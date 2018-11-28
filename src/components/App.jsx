import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Aside from '../common/Aside/Aside.jsx';
import NewUser from './NewUser/NewUser.jsx';
import NewGroup from './NewGroup/NewGroup.jsx';
import Home from './Home/Home.jsx';
import './App.scss';

class App extends Component {
  state = {
    groups: [
      {id: 'Golf', users: new Set(['Robert', 'Mike', 'Chris'])}, 
      {id: 'Football', users: new Set(['Robert'])}, 
      {id: 'Basketball', users: new Set(['Mike', 'Chris'])}, 
      {id: 'E-Sports', users: new Set(['Robert', 'Mike'])}, 
      {id: 'Swimming', users: new Set(['Robert', 'Chris'])}
    ],
  };

  includeGroup = group => {
    this.setState({groups: [...this.state.groups, {id: group, users: new Set([])}] });
  }

  includeUser = (user,groups) => {
    for(let i = 0; i < groups.length; i++){
      let currentIndex = this.state.groups.indexOf(
        this.state.groups.find(group => group.id === groups[i])
      );

      this.setState(({groups}) => ({
        groups: [
          ...groups.slice(0,currentIndex),
          {
            ...groups[currentIndex],
            users: groups[currentIndex].users.add(user)
          },
          ...groups.slice(currentIndex+1)
        ]
      }));
    }
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" render={()=><Home groups={this.state.groups}/>}/>
            <Route exact path="/new-group" render={
              ()=><NewGroup 
                  groups={this.state.groups.map(group => group.id)} 
                  includeGroup={(group) => this.includeGroup(group)}
                  />
            }/>
            <Route exact path="/new-user" render={
              ()=><NewUser 
              groups={this.state.groups} 
              includeUser={(user, groups) => this.includeUser(user,groups)} 
              />
            }/>
          </Switch>
          <Aside />
        </div>
      </Router>
    );
  }
}

export default App;
