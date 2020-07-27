import React, { Component } from "react";
import "./App.css";
import AddTaskComponent from "./AddTasksComponent/AddTasksComponent";

import TaskListComponent from "./TaskListComponent/TaskListComponent";
import FilterNameComponent from "./FilterNameComponent/FilterNameComponent";
import FilterDateComponent from "./FilterDateComponent/FilterDateComponent";

class App extends Component {
  render() {
    return (
      <div>
        <div>Hello, Redux App</div>
        <AddTaskComponent />
        <FilterDateComponent />
        <FilterNameComponent />
        <TaskListComponent />
      </div>
    );
  }
}

export default App;
