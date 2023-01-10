import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import Feed from "./HomePage/Feed";
import Rightbar from "./HomePage/Rightbar";
import Sidebar from "./HomePage/Sidebar";

import "./App.css";
import { Route, Routes } from "react-router-dom";

import { QuizzesList } from './components/quizes/QuizzesList';
import { QuizForm } from './components/quizes/QuizForm';
import { TeamsList } from './components/teams/TeamsList';
import { TeamForm } from './components/teams/TeamForm';
import { TeamDetails } from './components/teams/TeamDetails';
import { UsersInTeamEdit } from "./components/teams/UsersInTeamEdit";
import { TopicsList } from "./components/topics/TopicsList";
import { TopicForm } from "./components/topics/TopicForm";
import { TopicDetails } from "./components/topics/TopicDetails";
import QuestionCreate from "./components/Questions/QuestionCreate";
import QuestionEdit from "./components/Questions/QuestionEdit";
import QuestionList from "./components/Questions/QuestionList";

function App() {
  return (

    <Box>
      <header>
        <div className="center">
          <p>============================</p>
          <p>Hi, this space is for header</p>
          <p>============================</p>
        </div>
      </header>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Feed />} />

            <Route path="/topics-list" element={<TopicsList />} />
            <Route path="/topic/create" element={<TopicForm />} />
            <Route path="/topic/edit/:id" element={<TopicForm />} />
            <Route path="/topic/:id" element={<TopicDetails />} />

            <Route path="/question-list" element={<QuestionList />} />
            <Route path="/question/create" element={<QuestionCreate />} />
            <Route path="/question/edit/:qid" element={<QuestionEdit />} />

            <Route path="/teams-list" element={<TeamsList />} />
            <Route path="/team/create" element={<TeamForm />} />
            <Route path="/team/edit/:id" element={<TeamForm />} />
            <Route path="/team/:id" element={<TeamDetails />} />
            <Route path="/users-team/edit/:id" element={<UsersInTeamEdit />} />

            <Route path="/quizzes-list" element={<QuizzesList />} />
            <Route path="/quiz/create" element={<QuizForm />} />
            <Route path="/quiz/edit/:id" element={<QuizForm />} />
          </Routes>
        </div>
        {/* <Rightbar />  */}
      </Stack>
      <footer>
        <div className="center">
          <p>============================</p>
          <p>Hi, this space is for footer</p>
          <p>============================</p>
        </div>
      </footer>


    </Box>
  );
}

export default App;
