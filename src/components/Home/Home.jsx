import React, { Component } from 'react';
import './Home.scss';

class Home extends Component {
  state = {

  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="home">
        <h1>Home</h1>
        <table>
          <thead>
            <tr><td>Users</td></tr>
            <tr><td>Groups</td></tr>
          </thead>
          <tbody>
            <tr><td></td></tr>
            <tr><td></td></tr>
          </tbody>
        </table>
      </main>
    );
  }
}

Home.propTypes = {
 
};

export default Home;
