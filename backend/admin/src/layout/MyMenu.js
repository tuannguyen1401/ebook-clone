import * as React from 'react';
import { Menu } from 'react-admin';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import DashboardIcon from '@mui/icons-material/Dashboard';

const MyMenu = () => (
  <Menu>
    <Menu.Item to="/" primaryText="Dashboard" leftIcon={<DashboardIcon />} />
    <Menu.ResourceItem name="users" to="/users" primaryText="Users" leftIcon={<PeopleAltRoundedIcon />} />
  </Menu>
);

export default MyMenu;


