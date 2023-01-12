import { Avatar, Card, CardContent, CardHeader, Divider, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { green, pink } from '@mui/material/colors';

import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getCaptainNameByTeamId } from '../../utils/http-utils/team-requests';

export function TeamCard({ team, deleteTeam }) {

    const navigate = useNavigate();
    const params = useParams();
    const [captain, setCaptain] = useState({
        first_name: '',
        last_name: ''
    });
    useEffect(() => {
        getCaptainNameByTeamId(team).then(response => {
            setCaptain(response.data[0])
        })
    }, [team.captain_id])
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const redirectToDetails = () => {
        navigate(`/team/${team.id}`);
    }

    const redirectToEdit = () => {
        navigate(`/team/edit/${team.id}`);
    }

    return (

        <Card className='team-card' variant="outlined" sx={{ m: 3 }}>
            <CardHeader
                action={
                    <IconButton aria-label="settings" aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>

                }
                title={team.name}
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
                <MenuItem onClick={() => deleteTeam(team.id)}><IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="small" />
                </IconButton>Delete</MenuItem>
            </Menu>
            <Divider />
            <CardContent>
                <Typography component="div" variant="h5">
                    Captain: {captain.first_name + " " + captain.last_name}
                </Typography>
                <Divider />
                <Typography className='points' component="div" variant="h5" sx={{ mt: 1 }}>
                    Points:
                    <Avatar sx={{ ml: 2, bgcolor: green[500] }}>
                        {team.points}
                    </Avatar>

                </Typography>
            </CardContent>
        </Card>

    );
}