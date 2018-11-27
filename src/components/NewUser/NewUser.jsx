import React, { Component } from 'react';
import './NewUser.scss';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3,
  },
});


const groups = ['Golf', 'Football', 'Basketball', 'E-Games', 'Swimming'];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(group, that) {
  return {
    fontWeight:
      that.state.group.indexOf(group) === -1
        ? that.props.theme.typography.fontWeightRegular
        : that.props.theme.typography.fontWeightMedium,
  };
}

class NewUser extends Component {
  state = {
    name: '',
    group: []
  };

  constructor(props) {
    super(props);
  }

  componentWillMount(){

  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    return (
      <main className="new-user">
        <h1>New User</h1>
        <TextField
          required
          id="filled-required"
          label="Name"
          margin="normal"
          variant="filled"
          onChange={this.handleChange('name')}
        />
        <FormControl>
          <InputLabel htmlFor="select-multiple">Group</InputLabel>
          <Select
            multiple
            required
            autoWidth={true}
            value={this.state.group}
            onChange={this.handleChange('group')}
            input={<Input id="select-multiple" />}
            MenuProps={MenuProps}
          >
            {groups.map(group => (
              <MenuItem key={group} value={group} style={getStyles(group, this)}>
                {group}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="outlined" type="submit" color="primary">
          CONFIRM
        </Button>
      </main>
    );
  }
}

NewUser.propTypes = {
 
};
export default withStyles(styles, { withTheme: true })(NewUser);
