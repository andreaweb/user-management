import React, { Component } from 'react';
import './GroupDetails.scss';

class GroupDetails extends Component {
  state = {

  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="group-details">
        <h1>Group Details: Group</h1>
        <table>
          <thead>
            <tr><td>Users</td></tr>
          </thead>
          <tbody>
            <tr><td></td></tr>
          </tbody>
        </table>
      </div>
    );
  }
}

GroupDetails.propTypes = {
 
};

export default GroupDetails;
