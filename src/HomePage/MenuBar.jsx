import * as React from 'react';
import { Menu, MenuItem, ListItemButton, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import { SportsEsports } from '@mui/icons-material';

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ListItemButton
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ListItemIcon>
                <SportsEsports />
              </ListItemIcon>
        Game List
      </ListItemButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem component={Link} to="  " onClick={handleClose}>Game 1</MenuItem>
        <MenuItem component={Link} to="  " onClick={handleClose}>Game 2</MenuItem>
        <MenuItem component={Link} to="  " onClick={handleClose}>Game 3</MenuItem>
      </Menu>
    </div>
  );
}