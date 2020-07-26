import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import tasksReducer from "./tasks/tasksReducer";
import { loadState } from "./localStorage.js";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  //   addTask: addTaskReducer,
});

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, devToolsEnhancer());



export default store;
