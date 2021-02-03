import { NavLink } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import Timelines from './components/Timelines'

import "./reset.css";
import "./App.css";


function App() {
  // const params = useParams();
  return (
    <Router>
    <div className="App">
      <header className="app-header">
        <div className="container">
          <div className="content">
            <div className="title">Wisdom</div>
            <div className="navbar">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/timelines">Timelines</NavLink>
            </div>
          </div>
        </div>
      </header>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/timelines">
            <Timelines />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;

