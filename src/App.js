
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from './pages/homePage';
import Categories from './pages/categories';


import './App.css';


function App() {


  return (
    <Router exact path="/">
      <Redirect to="/homePage" />
      <Switch>
        <Route exact path="/homePage" component={HomePage} />
        <Route exact path="/categories" component={Categories} />
      </Switch>
    </Router>

  );
}

export default App;
