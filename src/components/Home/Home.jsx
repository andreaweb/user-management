import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        <p>Hello! Due to time restrictions, this app isn&lsquo;t as complete as it should be. <br/>
        You can include users and groups, but they&lsquo;ll disappear as soon as 
        the page is refreshed. <br/><br/> Since I don&lsquo;t connect to a &lsquo;real&lsquo; API, 
        I&lsquo;d have stored values locally if I had enough time.If there was another way to do this through the front-end, please let me know!  <br/><br/>
        Also, the page <em>New User</em> allows you to include current users in new groups as well.</p>
        <table>
          <thead>
            <tr><td>Groups</td><td>Users</td></tr>
          </thead>
          <tbody>
            {
              this.props.groups.map(
                group => (<tr key={group.id}>
                            <td>{group.id}</td>
                            <td>{Array.from(group.users).join(', ')}</td>
                          </tr>)
              )
            }
          </tbody>
        </table>
      </main>
    );
  }
}

Home.propTypes = {
 groups: PropTypes.array,
};

export default Home;
