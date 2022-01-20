import "./app.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WorkerList from "./pages/workerList/WorkerList";
import Worker from "./pages/worker/Worker";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/workers">
            <WorkerList />
          </Route>
          <Route path="/workers/:workerId">
            <Worker />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
