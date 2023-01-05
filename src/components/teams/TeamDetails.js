import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import { getAllUsersForTeam, getTeamById } from "../../utils/http-utils/team-requests";
import { TeamCard } from "./TeamCard";
import { deleteUser } from "../../utils/http-utils/user-requests";

export function TeamDetails() {

    const params = useParams();
    const [team, setTeam] = useState({
        name: ''
    });
    const [teamUsers, setTeamUsers] = useState([]);
    useEffect(() => {
        getTeamById(params.id).then(response => setTeam(response.data));
        getAllUsersForTeam(params.id).then(response => setTeamUsers(response.data));
    }, [params.id])

    const onDeleteUserHandler = (id) => {
        deleteUser(id).then(() => {
            setTeamUsers((prevState) => {
                return prevState.filter(user => user.id !== id);
            });
        });
    }

    return (
        <div className="team-details">
            <h1>All users in this team listed:</h1>
            <TeamCard team={team} />
            <div className="team-users-holder">
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {teamUsers.map(userFromTeam => {
                        const labelId = `checkbox-list-label-${userFromTeam.user_id}`;

                        return (
                            <ListItem
                                key={userFromTeam.user_id}
                                secondaryAction={
                                    <IconButton onClick={() => onDeleteUserHandler(userFromTeam.user_id)} edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                }
                                disablePadding
                            >
                                <ListItemText id={labelId} primary={`  ${userFromTeam.user_id}`} />
                            </ListItem>
                        );
                    })}
                </List>
            </div>
        </div>
    )
}