
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from './pages/homePage';
import Categories from './pages/categories';
import AboutMe from './layouts/aboutMe';
import Education from './layouts/education';
import Experience from './layouts/experience';


import './App.css';


function App() {


  return (
    <Router exact path="/">
      <Redirect to="/HomePage" />
      <Switch>
        <Route exact path="/homePage" component={HomePage} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/aboutMe" component={AboutMe} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/experience" component={Experience} />
      </Switch>
    </Router>

  );
}

export default App;
