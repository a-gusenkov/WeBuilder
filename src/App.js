
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import React from 'react';
import HomePage from './pages/homePage';
import Categories from './pages/categories';
import Themes from "./pages/themes";
import AboutMe from "./pages/aboutMe";
import Education from "./pages/education";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import ContactMe from "./pages/contactMe";
import Information from "./pages/information";
import { UserContext } from "./pages/userContext";



class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      category: {
        AboutMe: false,
        Education: false,
        Experience: false,
        Projects: false,
        ContactMe: false,
      }
    }
  }


  handleCheckBox = event => {

    let state = this.state;
    state.category[event.target.value] = event.target.checked;
    this.setState(state);
    console.log(this.state.category);
  }

  render() {
    return (
      <Router exact path="/">
        <Redirect to="/homePage" />
        <Switch>
          <UserContext.Provider value={this.state.category}>
            <Route exact path="/homePage" component={HomePage} />
            <Route exact path="/categories" render={(props) => <Categories {...props} category={this.state.category} changeHandler={this.handleCheckBox} />} />
            <Route exact path="/themes" component={Themes} />
            <Route exact path="/aboutMe" component={AboutMe} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contactMe" component={ContactMe} />
            <Route exact path="/information" component={Information} />
          </UserContext.Provider>
        </Switch>

      </Router>

    );
  }
}

export default App;
