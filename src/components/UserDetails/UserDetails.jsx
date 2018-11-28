import React, { Component } from 'react';
import './UserDetails.scss';

class UserDetails extends Component {
  state = {

  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="user-details">
       <h1>UserDetails: User</h1>
       <table>
          <thead>
            <tr><td>Groups</td></tr>
          </thead>
          <tbody>
            <tr><td></td></tr>
          </tbody>
        </table>
      </main>
    );
  }
}

UserDetails.propTypes = {
 
};

export default UserDetails;
