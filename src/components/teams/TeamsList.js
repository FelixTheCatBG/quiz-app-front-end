import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { useNavigate, useParams } from "react-router-dom";
import { Divider } from "@mui/material";
import { deleteTeam, getAllTeams } from "../../utils/http-utils/team-requests";
import { TeamCard } from "./TeamCard";

export function TeamsList() {
    const [teams, setTeams] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getAllTeams().then(response => {
            setTeams(response.data);
        })
    }, [params.id])

    const onDeleteHandler = (id) => {
        deleteTeam(id).then(() => {
            setTeams((prevState) => {
                return prevState.filter(team => team.id !== id);
            });
        });
    }
    const redirectToCreate = () => {
        navigate(`/team/create`);
    }

    return (
        <div>{console.log(teams)}
            <Button sx={{ mt: 2 }} variant="contained" size="large" onClick={redirectToCreate}>Create new Team</Button>
            <Divider variant="middle" sx={{ m: 2 }} />
            <div className="list-wrapper">

                {teams.map(team => <TeamCard key={team.id} team={team} deleteTeam={onDeleteHandler} />)}
            </div>
        </div>
    );
}