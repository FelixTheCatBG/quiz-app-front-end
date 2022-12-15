import { Box } from '@mui/material'
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Drafts, ArrowForwardIos} from '@mui/icons-material'

const Sidebar = () => {
  return (
    <Box 
    bgcolor="white"
    flex={1} 
    p={2} 
    sx={{display:{ xs: "none", sm: "block" }}}
    >
        Sidebar

        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ArrowForwardIos />
              </ListItemIcon>
              <ListItemText primary="Go" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Drafts />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>

    </Box>
  )
}

export default Sidebar