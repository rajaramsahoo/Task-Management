import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import AllTasks from "./pages/AllTasks";
import ImportantTasks from "./pages/ImportantTasks.jsx";
import CompletedTasks from "./pages/CompletedTasks.jsx";
import IncompletedTasks from "./pages/IncompletedTasks.jsx";
function App() {
  return (
    <div className="bg-gray-900 text-white h-screen p-2 ">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<AllTasks />} />
          <Route path="/importantTasks" element={<ImportantTasks />} />
          <Route path="/completedTasks" element={<CompletedTasks />} />
          <Route path="/incompletedTasks" element={<IncompletedTasks />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
