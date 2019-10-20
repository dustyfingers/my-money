import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header.component";
import Landing from "./pages/Landing/Landing.component";
import CreateBudget from "./pages/CreateBudget/CreateBudget.component";
import MyBudgets from "./pages/MyBudgets/MyBudgets.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/create-budget" component={CreateBudget} />
        <Route path="/budgets" component={MyBudgets} />
      </Switch>
    </div>
  );
}

export default App;
