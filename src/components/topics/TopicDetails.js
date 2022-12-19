import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteQuestion, getAllQuestionsForTopic } from "../../utils/http-utils/question-requests";
import { getTopicById } from "../../utils/http-utils/topic-requests";
import { TopicCard } from "./TopicCard";
import DeleteIcon from '@mui/icons-material/Delete';

export function TopicDetails() {

    const params = useParams();
    const [topic, setTopic] = useState({
        topic: ''
    });
    const [topicQuestions, setTopicQuestions] = useState([]);
    useEffect(() => {
        getTopicById(params.id).then(response => setTopic(response.data));
        getAllQuestionsForTopic(params.id).then(response => setTopicQuestions(response.data));
    }, [params.id])

    const onDeleteQuestionHandler = (id) => {
        deleteQuestion(id).then(() => {
            setTopicQuestions((prevState) => {
                return prevState.filter(question => question.id !== id);
            });
        });
    }

    return (
        <div className="topic-details">
            <h1>All questions for this topic listed:</h1>
            <TopicCard topic={topic}/>
            <div className="topic-questions-holder">
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {topicQuestions.map(questionTopic => {
        const labelId = `checkbox-list-label-${questionTopic.id}`;

        return (
            <ListItem
            key={questionTopic.id}
            secondaryAction={
              <IconButton onClick={() => onDeleteQuestionHandler(questionTopic.id)} edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
              <ListItemText id={labelId} primary={`  ${questionTopic.question}`} />
          </ListItem>
        );
      })}
    </List>
                {/* {topicQuestions.map(questionTopic => <QuestionsCard key={questionTopic.question_id} rental={rental} onRentalDelete={onDeleteHandler} />)} */}
            </div>
        </div>
    )
}