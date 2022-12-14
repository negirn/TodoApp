import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todos from "./Todos";
import Todo from "./Todo";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" children={<Todos />} />
          <Route path="/todo/:id" children={<Todo />} />
        </Switch>
      </Router>
    </div>
  );
}
