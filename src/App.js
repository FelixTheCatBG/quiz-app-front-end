import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import QuestionCreate from './Components/Questions/QuestionCreate';
import QuestionEdit from './Components/Questions/QuestionEdit';
import QuestionList from './Components/Questions/QuestionList';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuestionList />}></Route>
          <Route path="/question/create" element={<QuestionCreate />}></Route>
          <Route path="/question/edit/:qid" element={<QuestionEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
