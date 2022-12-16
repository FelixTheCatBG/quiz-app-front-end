
import { Button, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTopicById, saveTopic } from '../../utils/http-utils/topic-requests';

export function TopicForm() {

    const navigate = useNavigate();
    const params = useParams();
    const [topic, setTopic] = useState({
        topic: ''
    });

    useEffect(() => {
        if (params.id) {
            getTopicById(params.id).then((response) => {
                setTopic(response.data);
            });
        }
    }, [params.id]);
    const onTopicSubmit = (event) => {
        event.preventDefault();

        saveTopic(topic).then(() => {
            navigate('/topics-list');
        });
    }
    const onInputChange = (event) => {
        setTopic((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    return (
        <Paper className='topic-form'>
        <h2>Create new topic for quizes</h2>
  
        <TextField
        id="topic-textfield"
          type="text"
          name="topic"
          value={topic.topic}
          onChange={onInputChange}
          label={"Topic name"} 
        />
  
        <Button sx={{ m: 2 }} variant="contained" onClick={onTopicSubmit}>Submit</Button>
      </Paper>
    );
}