import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import Feed from "./HomePage/Feed";
import Rightbar from "./HomePage/Rightbar";
import Sidebar from "./HomePage/Sidebar";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { TopicsList } from "./Components/topics/TopicsList";
import { TopicForm } from "./Components/topics/TopicForm";
import { TopicDetails } from "./Components/topics/TopicDetails";
import QuestionCreate from "./Components/Questions/QuestionCreate";
import QuestionEdit from "./Components/Questions/QuestionEdit";
import QuestionList from "./Components/Questions/QuestionList";

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
        <div className="App">
          <Routes>
            <Route path="/" element={<Feed />} />

            <Route path="/topics-list" element={<TopicsList />} />
            <Route path="/topic/create" element={<TopicForm />} />
            <Route path="/topic/edit/:id" element={<TopicForm />} />
            <Route path="/topic/:id" element={<TopicDetails />} />

            <Route path="/question-list" element={<QuestionList />}></Route>
            <Route path="/question/create" element={<QuestionCreate />}></Route>
            <Route
              path="/question/edit/:qid"
              element={<QuestionEdit />}
            ></Route>
          </Routes>
        </div>
        <Rightbar />
      </Stack>
      <footer>
        <div class="center">
          <p>============================</p>
          <p>Hi, this space is for footer</p>
          <p>============================</p>
        </div>
      </footer>
    </Box>
  );
}

export default App;
