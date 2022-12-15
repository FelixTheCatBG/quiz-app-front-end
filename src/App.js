import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import Feed from "./HomePage/Feed"
import Rightbar from "./HomePage/Rightbar";
import Sidebar from "./HomePage/Sidebar";
import './App.css';


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
      <div class="center">
      <p>============================</p>
      <p>Hi, this space is for footer</p>
      <p>============================</p>
      </div>
    </Box>
  );
}

export default App;