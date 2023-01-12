import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { useNavigate, useParams } from "react-router-dom";
import { deleteQuiz, getAllQuizzes, getAllTeamsForQuiz, getAllTopicsForQuiz } from "../../utils/http-utils/quiz-requests";
import { QuizCard } from "./QuizCard";
import { Divider } from "@mui/material";
import { getAllTopics } from "../../utils/http-utils/topic-requests";
import { getAllTeams } from "../../utils/http-utils/team-requests";

export function QuizzesList() {
    const [quizzes, setQuizzes] = useState([]);
    const [quiz_topics, setQuizTopics] = useState([]);
    const [topics, setTopics] = useState([]);
    const [teams, setTeams] = useState([]);
    const [quiz_teams, setQuizTeams] = useState([]);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getAllTopics().then(response => {
            setTopics(response.data);
        })
        getAllTopicsForQuiz().then(response => {
            setQuizTopics(response.data)
        });
        getAllTeams().then(response => {
            setTeams(response.data);
        })
        getAllTeamsForQuiz().then(response => {
            setQuizTeams(response.data)
        });
        getAllQuizzes().then(response => {
            setQuizzes(response.data);
        })
    }, [params.id])

    const onDeleteHandler = (id) => {
        deleteQuiz(id).then(() => {
            setQuizzes((prevState) => {
                return prevState.filter(quiz => quiz.id !== id);
            });
        });
    }
    const redirectToCreate = () => {
        navigate(`/quiz/create`);
    }
    const findTopics = (id) => {
        let temp = quiz_topics.filter(quiz_topic => quiz_topic.quiz_id === id);
        let finalTopics = [];
        for (let i = 0; i < temp.length; i++) {
            finalTopics.push(topics.filter(topic => topic.id === temp[i].topic_id)[0]);
        }
        return finalTopics;
    }
    const findTeams = (id) => {
        let temp = quiz_teams.filter(quiz_team => quiz_team.quiz_id === id);
        let finalTeams = [];
        for (let i = 0; i < temp.length; i++) {
            finalTeams.push(teams.filter(team => team.id === temp[i].team_id)[0]);
        }
        return finalTeams;
    }

    return (
        <div>
            <Button sx={{ mt: 2 }} variant="contained" size="large" onClick={redirectToCreate}>Create new Quiz</Button>
            <Divider variant="middle" sx={{ m: 2 }} />
            <div className="list-wrapper">
                {quizzes.map(quiz => <QuizCard key={quiz.id} quiz={quiz} deleteQuiz={onDeleteHandler} topics={findTopics(quiz.id)} teams={findTeams(quiz.id)}  />)}
            </div>
        </div>
    );
}