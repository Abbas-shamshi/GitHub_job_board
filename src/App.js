import './App.css';
import Dashboard from './components/dashboard';
import { Route, Switch } from "react-router";
import {
  HashRouter as Router,
  Link
} from "react-router-dom";
import JobDetails from './components/jobDetail';

function App() {
  return <>
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/details" component={JobDetails} />
      </Switch>
    </Router>
  </>
}

export default App;
