import './App.css';
import { Route, Routes } from 'react-router-dom';
import { TopicsList } from './components/topics/TopicsList';
import { TopicForm } from './components/topics/TopicForm';
import { TopicDetails } from './components/topics/TopicDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/topics-list" element={<TopicsList />} />
        <Route path="/topic/create" element={<TopicForm />} />
        <Route path="/topic/edit/:id" element={<TopicForm />} />
        <Route path="/topic/:id" element={<TopicDetails />} />
      </Routes>
    </div>
  );
}

export default App;
