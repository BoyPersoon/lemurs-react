import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import Navigation from "./components/Navigation"
import Footer from "./components/Footer";

// Containers
import InjectProjectData from "./containers/InjectProjectData";
import InjectSProjectData from "./containers/InjectSProjectData";
import InjectGitData from "./containers/InjectGitData";


// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import About from "./pages/About";
import Repos from "./pages/Repo";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route path="/projects">
                <InjectProjectData>
                  <Projects />
                </InjectProjectData>
              </Route>
              <Route path="/project/:id">
                <InjectSProjectData>
                  <Project />
                </InjectSProjectData>
              </Route>
              <Route path="/repos">
                <InjectGitData>
                  <Repos />
                </InjectGitData>
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>
    </div>
  );
}

export default App;
