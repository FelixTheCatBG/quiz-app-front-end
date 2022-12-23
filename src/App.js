import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import Feed from "./HomePage/Feed"
import Rightbar from "./HomePage/Rightbar";
import Sidebar from "./HomePage/Sidebar";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { TopicsList } from './components/topics/TopicsList';
import { TopicForm } from './components/topics/TopicForm';
import { TopicDetails } from './components/topics/TopicDetails';


function App() {

  return (

    <Box>
      <header>
        <div class="center">
          <p>============================</p>
          <p>Hi, this space is for header</p>
          <p>============================</p>
        </div>
      </header>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <footer>
        <div class="center">
          <p>============================</p>
          <p>Hi, this space is for footer</p>
          <p>============================</p>
        </div>
      </footer>

      <div className="App">
        <Routes>
          <Route path="/topics-list" element={<TopicsList />} />
          <Route path="/topic/create" element={<TopicForm />} />
          <Route path="/topic/edit/:id" element={<TopicForm />} />
          <Route path="/topic/:id" element={<TopicDetails />} />
        </Routes>
      </div>
    </Box>
  );
}

export default App;