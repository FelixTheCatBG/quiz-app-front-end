import { Box } from '@mui/material';
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ArrowForwardIos, Home } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import PositionedMenu from './MenuBar.jsx'

const Sidebar = () => {

  return (
    <Box
      bgcolor="lightgreen"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Sidebar

      <nav>
        <List>
          <ListItem disablePadding >
            <ListItemButton href="">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="">
              <ListItemIcon>
                <ArrowForwardIos />
              </ListItemIcon>
              <ListItemText primary="Example" />      
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