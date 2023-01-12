import { Divider, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { getAllUsersForTeam, getTeamById } from "../../utils/http-utils/team-requests";
import { TeamCard } from "./TeamCard";
import { getAllUsers } from "../../utils/http-utils/user-requests";
import { addUserInTeam, deleteUserFromTeam } from "../../utils/http-utils/team-users-requests";

export function UsersInTeamEdit() {

    const params = useParams();
    const navigate = useNavigate();
    const [team, setTeam] = useState({
        name: ''
    });
    const [teamUsers, setTeamUsers] = useState([]);
    const [teamToUserNew, setTeamToUserNew] = useState({
        team_id: '',
        user_id: ''
    });
    const [allUsers, setUsers] = useState([]);

    useEffect(() => {
        getTeamById(params.id).then(response => setTeam(response.data));
        getAllUsersForTeam(params.id).then(response => setTeamUsers(response.data));
        getAllUsers().then(response => setUsers(response.data));
    }, [params.id])

    const onDeleteUserFromTeamHandler = (id) => {
        deleteUserFromTeam(id).then(() => {
            setTeamUsers((prevState) => {
                return prevState.filter(userToTeam => userToTeam.id !== id);
            });
        });
    }

    const onAddUserToTeamHandler = (teamId, userId) => {
        teamToUserNew.team_id = teamId;
        teamToUserNew.user_id = userId;
        addUserInTeam(teamToUserNew).then(() => {
            setTeamUsers((prevState) => {
                return [...prevState, teamToUserNew]
            });
        });
    }

    return (
        <div className="team-details">
            <h1>Edit users in this team:</h1>
            <TeamCard key={team.id} team={team} />
            <div className="team-users-holder">
                <Divider />
                <h5>Current users in this team:</h5>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {
                        teamUsers.map(userFromTeam => {
                            return (
                                <ListItem
                                    key={userFromTeam.id}
                                    secondaryAction={
                                        <IconButton onClick={() => onDeleteUserFromTeamHandler(userFromTeam.id)} edge="end" aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    }
                                    disablePadding
                                >
                                    <ListItemText id={userFromTeam.user_id-1} primary={`${allUsers[userFromTeam.user_id-1].first_name + " " + allUsers[userFromTeam.user_id-1].last_name}`} />           
                                </ListItem>
                            );
                        })}
                </List>
            </div>
            <Divider />
            <div className="all-users-holder">
                <h5>Add users in this team:</h5>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {
                        allUsers.map(user => {
                            return (
                                <ListItem
                                    key={user.id}
                                    secondaryAction={
                                        <IconButton onClick={() => onAddUserToTeamHandler(team.id, user.id)} edge="end" aria-label="add">
                                            <AddCircleOutlineIcon />
                                        </IconButton>
                                    }
                                    disablePadding
                                >
                                    <ListItemText id={user.id} primary={`${user.first_name + " " + user.last_name}`} />
                                </ListItem>
                            );
                        })}
                </List>
            </div>
        </div>
    )
}