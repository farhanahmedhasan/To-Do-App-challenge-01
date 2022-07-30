import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { Other } from "./pages/Other";

import { IsOverDue } from "./utility/IsOverDue";
import { taskData } from "./data/data";

const App = () => {
  const [tasks, setTasks] = useState(taskData);

  const overDueTasks = tasks.filter((task) => IsOverDue(task.createdAt));
  console.log(overDueTasks);

  console.log(IsOverDue(new Date()));

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home type="home" />} />
        <Route path="/work" element={<Work type="work" />} />
        <Route path="/other" element={<Other type="other" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
