
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import HomePage from './pages/homePage';
import Categories from './pages/categories';
import Themes from "./pages/themes";
import AboutMe from "./pages/aboutMe";
import Education from "./pages/education";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import ContactMe from "./pages/contactMe";



function App() {


  return (
    <Router exact path="/">
      <Redirect to="/homePage" />
      <Switch>
        <Route exact path="/homePage" component={HomePage} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/themes" component={Themes} />
        <Route exact path="/aboutMe" component={AboutMe} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contactMe" component={ContactMe} />
      </Switch>
    </Router>

  );
}

export default App;
