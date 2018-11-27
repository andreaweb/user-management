import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
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
          <Button variant="contained" color="primary" href="/new-group">
            New Group
          </Button>
          <Button variant="contained" color="primary" href="/new-user">
            New User
          </Button>
          <MenuList>
            <MenuItem component={Link} to="/">
                <ListItemIcon>
                  <HomeIcon/>
                </ListItemIcon>
                <ListItemText>
                  Home
                </ListItemText>
            </MenuItem>
          </MenuList>
      </aside>
    );
  }
}

Aside.propTypes = {
 
};

export default Aside;
