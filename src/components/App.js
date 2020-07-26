import React, { Component } from "react";
import "./App.css";
import AddTaskComponent from "./AddTasksComponent/AddTasksComponent";

import TaskListComponent from "./TaskListComponent/TaskListComponent";

class App extends Component {
  render() {
    return (
      <div>
        <div>Hello, Redux App</div>
        <AddTaskComponent />
        <TaskListComponent />
      </div>
    );
  }
}

export default App;
