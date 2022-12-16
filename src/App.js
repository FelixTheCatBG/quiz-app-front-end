import './App.css';
import { Route, Routes } from 'react-router-dom';
import { TopicsList } from './components/topics/TopicsList';
import { TopicForm } from './components/topics/TopicForm';

function App() {
  return (
    <div className="App">
      <Routes>
          {/* <Route exact path="/" element={<Layout />} /> */}
          <Route path="/topics-list" element={<TopicsList />} />
          <Route path="/topic/create" element={<TopicForm />} />
          <Route path="/topic/edit/:id" element={<TopicForm />} />
      </Routes>
    </div>
  );
}

export default App;
