import "./app.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WorkerList from "./pages/workerList/WorkerList";
import Worker from "./pages/worker/Worker";
import NewWorker from "./pages/newWorker/NewWorker";
import CompanyList from "./pages/companyList/CompanyList";
import Company from "./pages/company/Company";
import NewCompany from "./pages/newCompany/NewCompany";
import EventList from "./pages/eventList/EventList";
import Event from "./pages/event/Event";
import NewEvent from "./pages/newEvent/NewEvent";

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
          <Route exact path="/workers/new">
            <NewWorker />
          </Route>
          <Route path="/workers/:workerId">
            <Worker />
          </Route>
          <Route exact path="/companies">
            <CompanyList />
          </Route>
          <Route exact path="/companies/new">
            <NewCompany />
          </Route>
          <Route path="/companies/:companyId">
            <Company />
          </Route>
          <Route exact path="/events">
            <EventList />
          </Route>
          <Route exact path="/events/new">
            <NewEvent />
          </Route>
          <Route path="/events/:eventId">
            <Event />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
