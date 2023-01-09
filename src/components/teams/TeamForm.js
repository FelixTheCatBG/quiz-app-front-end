
import { Button, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTeamById, saveTeam } from '../../utils/http-utils/team-requests';

export function TeamForm() {

    const navigate = useNavigate();
    const params = useParams();
    const [team, setTeam] = useState({
        name: ''
    });

    useEffect(() => {
        if (params.id) {
            getTeamById(params.id).then((response) => {
                setTeam(response.data);
            });
        }
    }, [params.id]);
    const onSubmit = (event) => {
        event.preventDefault();

        saveTeam(team).then(() => {
            navigate('/teams-list');
        });
    }
    const onInputChange = (event) => {
        setTeam((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    return (
        <Paper className='topic-form'>
            <h2>Create new team</h2>

            <TextField
                id="topic-textfield"
                type="text"
                name="topic"
                value={team.name}
                onChange={onInputChange}
                label={"Team name"}
            />

            <Button sx={{ m: 2 }} variant="contained" onClick={onSubmit}>Submit</Button>
        </Paper>
    );
}