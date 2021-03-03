import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardPage from "./Screens/Dashboard/Dashboard";
import HomePage from "./Screens/Home/HomePage";
import LoginPage from "./Screens/Login/LoginPage";
// import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={LoginPage} exact />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/" component={HomePage} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
