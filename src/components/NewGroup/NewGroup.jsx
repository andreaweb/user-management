import React, { Component } from 'react';
import './NewGroup.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class NewGroup extends Component {
  state = {

  };

  constructor(props) {
    super(props);
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    return (
      <main className="new-group">
        <h1>New Group</h1>
        <TextField
          required
          id="filled-required"
          label="Name"
          margin="normal"
          variant="filled"
          onChange={this.handleChange('name')}
        />
        <Button variant="outlined" type="submit" color="primary">
          CONFIRM
        </Button>
      </main>
    );
  }
}

NewGroup.propTypes = {
 
};

export default NewGroup;
