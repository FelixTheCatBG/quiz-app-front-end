import { Box } from '@mui/material'
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {ArrowForwardIos, Home, SportsEsports} from '@mui/icons-material'
import Divider from '@mui/material/Divider';

const Sidebar = () => {
  return (
    <Box 
    bgcolor="lightgreen"
    flex={1} 
    p={2} 
    sx={{display:{ xs: "none", sm: "block" }}}
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
              <ListItemText primary="Start" />
            </ListItemButton>
          </ListItem>       
          <ListItem disablePadding>
            <ListItemButton href="">
              <ListItemIcon>
                <SportsEsports />
              </ListItemIcon>
              <ListItemText primary="Game" />
            </ListItemButton>
          </ListItem>  
        </List>
        </nav>
      <Divider />
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton href="">
              <ListItemText primary="Example" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="">
              <ListItemText primary="Example 2" />
            </ListItemButton>
          </ListItem>
        </List>
        </nav>

    </Box>
  )
}

export default Sidebar