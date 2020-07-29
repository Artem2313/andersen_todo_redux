import React from "react";
import styles from "./App.module.css";
import AddTaskComponent from "./AddTasksComponent/AddTasksComponent";
import SortTasksComponent from "./SortTasksComponent/SortTasksComponent";
import TaskListComponent from "./TaskListComponent/TaskListComponent";
import FilterNameComponent from "./FilterNameComponent/FilterNameComponent";
import FilterDateComponent from "./FilterDateComponent/FilterDateComponent";

const App = () => (
  <div className={styles.mainWrapper}>
    <h1 className={styles.title}>Redux App</h1>
    <AddTaskComponent />
    <FilterDateComponent />
    <FilterNameComponent />
    <SortTasksComponent />
    <TaskListComponent />
  </div>
);

export default App;
