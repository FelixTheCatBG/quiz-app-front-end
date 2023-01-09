import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardHeader, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DeleteIcon from '@mui/icons-material/Delete';

import { useNavigate } from 'react-router-dom';
import React from 'react';
import { TopicCard } from '../topics/TopicCard';

export function QuizCard({ quiz, deleteQuiz, topics }) {

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const redirectToEdit = () => {
        navigate(`/quiz/edit/${quiz.id}`);
    }
    const redirectToQuizGame = () => {
        navigate(`/quiz/game/${quiz.id}`);
    }

    return (

        <Card className='quiz-card' variant="outlined" sx={{ m: 3, maxWidth: 400 }}>
            <CardHeader
                action={
                    <IconButton aria-label="settings" aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>
                }
                title={quiz.name}
            />
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={redirectToEdit}>Edit</MenuItem>
                <MenuItem onClick={() => deleteQuiz(quiz.id)}><IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="small" />
                </IconButton>Delete</MenuItem>
            </Menu>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Show all topics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="list-wrapper">
                        {
                            topics.lenght > 0 ?
                                      topics.map((topic) => <TopicCard key={topic.id} topic={topic} deleteTopic={redirectToEdit} />)
                                  :  "No topics to show!"
                        }
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Show all teams</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Button sx={{ m: 2 }} variant="contained" size="large" onClick={redirectToQuizGame}>Start Quiz</Button>
        </Card>

    );
}