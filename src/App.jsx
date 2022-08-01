import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { Other } from "./pages/Other";

import { taskData } from "./data/data";

import { Banner } from "./components/Banner";
import { Wrapper } from "./components/Wrapper";
import { NavBar } from "./components/NavBar";

const App = () => {
  // const [tasks, setTasks] = useState(taskData);

  // const overDueTasks = tasks.filter((task) => IsOverDue(task.createdAt));
  // console.log(overDueTasks);

  // console.log(IsOverDue(new Date()));

  return (
    <BrowserRouter>
      <Wrapper>
        <Banner />
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home type="home" />} />
          <Route path="/work" element={<Work type="work" />} />
          <Route path="/other" element={<Other type="other" />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
