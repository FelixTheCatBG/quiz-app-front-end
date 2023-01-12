import { Button, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTeam, getAllUsersForTeam, getTeamById } from "../../utils/http-utils/team-requests";
import { TeamCard } from "./TeamCard";
import { deleteUser, getAllUsers, getUserById } from "../../utils/http-utils/user-requests";
import { deleteUserFromTeam } from "../../utils/http-utils/team-users-requests";

export function TeamDetails() {

    const params = useParams();
    const navigate = useNavigate();
    const [team, setTeam] = useState({
        name: ''
    });
    const [teamUsers, setTeamUsers] = useState([]);
    const [allUsers, setUsers] = useState([]);
    useEffect(() => {
        getTeamById(params.id).then(response => setTeam(response.data));
        getAllUsersForTeam(params.id).then(response => setTeamUsers(response.data));
        getAllUsers().then(response => setUsers(response.data));
    }, [params.id])

    const onDeleteUserHandler = (team_id,user_id) => {
        deleteUserFromTeam(team_id,user_id).then(() => {
        });
        
    }   
    const onDeleteHandler = (id) => {
        deleteTeam(id).then(() => {
            navigate(`/teams-list`);
        });
    }
     const redirectToEditUsersInTeam = () => {
        navigate(`/users-team/edit/${team.id}`);
    }

    return (
        <div className="team-details">
            <h1>All users in this team listed:</h1>
            <TeamCard key={team.id} team={team} deleteTeam={onDeleteHandler} />
            <Button sx={{ mt: 2 }} variant="contained" size="large" onClick={redirectToEditUsersInTeam}>Edit users in this Team</Button>
            <div className="team-users-holder">
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {teamUsers.map(userFromTeam => {
                        const labelId = `checkbox-list-label-${userFromTeam.user_id}`;
                        
                        return (

                            <ListItem
                                key={userFromTeam.user_id}
                                secondaryAction={
                                    <IconButton onClick={() => onDeleteUserHandler(userFromTeam.team_id, userFromTeam.user_id)} edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                }
                                disablePadding
                            >
                                <ListItemText id={labelId} primary={`  ${allUsers[userFromTeam.user_id].first_name + " " + allUsers[userFromTeam.user_id].last_name}`} />
                            </ListItem>
                        );
                    })}
                </List>
            </div>
        </div>
    )
}