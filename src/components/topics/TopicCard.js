import { CardHeader, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from 'react-bootstrap/Card';

import { useNavigate } from 'react-router-dom';
import React from 'react';

export function TopicCard({ topic, deleteTopic}) {

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const redirectToDetails = () => {
    navigate(`/topic/${topic.id}`);
  }

  const redirectToEdit = () => {
    navigate(`/topic/edit/${topic.id}`);
  }

  return (

    <Card className='topic-card' variant="outlined" sx={{ m: 3 }}>
    <CardHeader
      action={
        <IconButton aria-label="settings"         aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        
      }
      title={topic.topic}
    />
          <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={redirectToDetails}>Details</MenuItem>
        <MenuItem onClick={redirectToEdit}>Edit</MenuItem>
        <MenuItem onClick={() => deleteTopic(topic.id)}><IconButton aria-label="delete" size="small">
  <DeleteIcon fontSize="small" />
</IconButton>Delete</MenuItem>
      </Menu>
  </Card>
    // <Card style={{ width: '18rem' }}>
    //   <Card.Body>
    //     <Card.Title>{topic.topic}</Card.Title>
    //     <div className='btn-holder'>
    //       <Button variant="info" onClick={redirectToDetails}>Details</Button>
    //       <Button variant="primary" onClick={redirectToEdit}>Edit</Button>
    //       <Button variant="danger" onClick={() => deleteUser(topic.id)}>Delete</Button>
    //     </div>
    //   </Card.Body>
    // </Card>
  );
}