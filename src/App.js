import './App.css';
import { Route, Routes } from 'react-router-dom';
import { TopicsList } from './components/topics/TopicsList';
import { TopicForm } from './components/topics/TopicForm';
import { TopicDetails } from './components/topics/TopicDetails';
import { QuizzesList } from './components/quizes/QuizzesList';
import { QuizForm } from './components/quizes/QuizForm';
import { TeamsList } from './components/teams/TeamsList';
import { TeamForm } from './components/teams/TeamForm';
import { TeamDetails } from './components/teams/TeamDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/topics-list" element={<TopicsList />} />
        <Route path="/topic/create" element={<TopicForm />} />
        <Route path="/topic/edit/:id" element={<TopicForm />} />
        <Route path="/topic/:id" element={<TopicDetails />} />

        <Route path="/teams-list" element={<TeamsList />} />
        <Route path="/team/create" element={<TeamForm />} />
        <Route path="/team/edit/:id" element={<TeamForm />} />
        <Route path="/team/:id" element={<TeamDetails />} />

        <Route path="/quizzes-list" element={<QuizzesList />} />
        <Route path="/quiz/create" element={<QuizForm />} />
        <Route path="/quiz/edit/:id" element={<QuizForm />} />
      </Routes>
    </div>
  );
}

export default App;
