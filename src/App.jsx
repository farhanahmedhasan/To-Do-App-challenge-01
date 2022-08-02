import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Work, Others, AllTasks, Overdue } from "./pages";

import { AppWrapper, PagesWrapper } from "./components/wrappers";
import { Banner, NavBar } from "./components";

const App = () => {
  // const [tasks, setTasks] = useState(taskData);

  // const overDueTasks = tasks.filter((task) => IsOverDue(task.createdAt));
  // console.log(overDueTasks);

  // console.log(IsOverDue(new Date()));

  return (
    <BrowserRouter>
      <AppWrapper>
        <Banner />
        <NavBar />

        <PagesWrapper>
          <Routes>
            <Route exact path="/" element={<Home type="home" />} />
            <Route path="/work" element={<Work type="work" />} />
            <Route path="/others" element={<Others type="others" />} />
            <Route path="/alltasks" element={<AllTasks type="alltasks" />} />
            <Route path="/overdue" element={<Overdue type="overdue" />} />
          </Routes>
        </PagesWrapper>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
