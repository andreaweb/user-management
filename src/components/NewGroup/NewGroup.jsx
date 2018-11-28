import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewGroup.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class NewGroup extends Component {
  state = {
    name: ''
  };

  constructor(props) {
    super(props);
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleSubmit = () => {
    if(this.state.name.length > 0){
      const lowerArr = this.props.groups.map(word => word.toLowerCase());
      const lowerVal = this.state.name.toLowerCase();
      if(lowerArr.includes(lowerVal)){
        alert('Already exists');
      }else{
        this.props.includeGroup(this.state.name);
        alert('New group successfully included');
      }
    }else{
      //apply error class in Material Design
    }
  }

  render() {
    return (
      <main className="new-group">
        <h1>New Group</h1>
        <p>Remember to create a group with a different name from existing ones.</p>
        <p>Current groups are: {this.props.groups.join(', ')} </p>
        <TextField
          required
          id="filled-required"
          label="Name"
          margin="normal"
          variant="filled"
          onChange={this.handleChange('name')}
        />
        <Button variant="outlined" type="submit" onClick={this.handleSubmit} color="primary">
          CONFIRM
        </Button>
      </main>
    );
  }
}

NewGroup.propTypes = {
 groups: PropTypes.array,
 includeGroup: PropTypes.func
};

export default NewGroup;
