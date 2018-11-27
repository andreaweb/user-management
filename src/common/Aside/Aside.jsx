import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './Aside.scss';

class Aside extends Component {
  state = {

  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside className="aside">
          <Button>New Group</Button>
      </aside>
    );
  }
}

Aside.propTypes = {
 
};

export default Aside;
