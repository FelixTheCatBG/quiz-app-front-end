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
        Discover List
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
        <MenuItem component={Link} to="/topics-list" onClick={handleClose}>Topics</MenuItem>
        <MenuItem component={Link} to="/question-list" onClick={handleClose}>Question</MenuItem>
        <MenuItem component={Link} to="/teams-list" onClick={handleClose}>Teams</MenuItem>
        <MenuItem component={Link} to="/quizzes-list" onClick={handleClose}>Quizzes</MenuItem>

      </Menu>
    </div>
  );
}