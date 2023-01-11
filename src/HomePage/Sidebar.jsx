import { Box } from '@mui/material';
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Instagram, Home } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import PositionedMenu from './MenuBar.jsx'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  return (
    <Box
      bgcolor=""
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      

      <nav>
        <List>
          <ListItem disablePadding >
            <ListItemButton component={Link} to="  ">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton target="_blank" href='https://www.instagram.com/johnnydepp/'>
              <ListItemIcon>
                <Instagram />
              </ListItemIcon>
              <ListItemText primary="Our Instagram" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <PositionedMenu />
    </Box>
  )
}

export default Sidebar