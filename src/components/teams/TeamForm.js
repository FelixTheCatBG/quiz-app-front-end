import { Autocomplete, Button, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTeamById, saveTeam } from '../../utils/http-utils/team-requests';
import { getAllUsers } from '../../utils/http-utils/user-requests';

export function TeamForm() {

    const navigate = useNavigate();
    const params = useParams();
    const [team, setTeam] = useState({
        name: '',
        captain_id: ''
    });
    const [users, SetUsers] = useState([]);
    const userOptions = users.map(user => ({
        id: user.id,
        label: user.first_name + " " + user.last_name

    }));
    const [value, setValue] = React.useState(userOptions[0]);
    const [inputValue, setInputValue] = React.useState('');

    useEffect(() => {
        if (params.id) {
            getTeamById(params.id).then((response) => {
                setTeam(response.data);
            });
        }
        getAllUsers().then(response => {
            SetUsers(response.data);
        });
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
        }))
    }

    const onAutocompleteChange = (event, newValue) => {
        setTeam((prevState) => ({
            ...prevState,
            captain_id: newValue.id
        }))
    }

    return (
        <Paper className='team-form'>
            <h2>Create new team</h2>
            <TextField sx={{ minWidth: 200 }}
                id="team-textfield"
                type="text"
                name="name"
                value={team.name}
                onChange={onInputChange}
                label={"Team name"}
            />
            <div>
                <br />
                <Autocomplete
                    value={value}
                    onChange={onAutocompleteChange}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    id="controllable-states-demo"
                    options={userOptions}
                    sx={{ width: 220 }}
                    renderInput={(params) => <TextField {...params} label="Controllable" />}
                />
            </div>
            <Button sx={{ m: 2 }} variant="contained" onClick={onSubmit}>Submit</Button>
        </Paper>
    );
}