import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import Tasks from "./components/Tasks";
import CreateTasks from "./components/CreateTasks";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tasks" element={ <Tasks />} />
      <Route path="/add/tasks" element={ <CreateTasks />} />
    </Routes>
      

    </>
  );
}

export default App;
