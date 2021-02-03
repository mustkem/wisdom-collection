import { NavLink } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Home from "./components/Home";
import Timelines from "./components/Timelines";

import "./reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // const params = useParams();
  return (
    <Router>
      <div className="App">
        <div>
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
          <Route path="/timelines">
            <Timelines />
          </Route>
          <Route path="/home/:page">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          {/* <Route path="/">
            <Redirect to="/home" />
          </Route> */}
        </Switch>
        </div>
        <div className="logo-bottom-strip">
          <div className="container">
            <div className="logo-bottom">@M</div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
