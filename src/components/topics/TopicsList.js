import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { useNavigate, useParams } from "react-router-dom";
import { deleteTopic, getAllTopics} from "../../utils/http-utils/topic-requests";
import {TopicCard } from "./TopicCard";
import { Divider } from "@mui/material";

export function TopicsList() {
    const [topics, setTopics] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
            getAllTopics().then(response => {
                setTopics(response.data);
            })
    }, [params.id])

    const onDeleteHandler = (id) => {
        deleteTopic(id).then(() => {
            setTopics((prevState) => {
                return prevState.filter(topic => topic.id !== id);
            });
        });
    }
    const redirectToCreate = () => {
        navigate(`/topic/create`);
      }

    return (
        <div>
            <Button sx={{ mt: 2 }}variant="contained" size="large" onClick={redirectToCreate}>Create new Topic</Button>
            <Divider variant="middle" sx={{ m: 2 }}/>
            <div className="list-wrapper">
            
            {topics.map(topic => <TopicCard key={topic.id} topic={topic} deleteTopic={onDeleteHandler} />)}
            </div>
        </div>
    );
}