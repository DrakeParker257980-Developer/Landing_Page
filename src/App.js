/* eslint-disable react/jsx-pascal-case */
// import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import My_Projects from "./components/My_Projects";
import Forum from "./components/Forum";
import Web_Chat from "./components/Web_Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/My_Projects">
            <My_Projects />
          </Route>
          <Route exact path="/Forum">
            <Forum />
          </Route>
          <Route exact path="/Web_Chat">
            <Web_Chat />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
