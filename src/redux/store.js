import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import tasksReducer from "./tasks/tasksReducer";
import { loadState } from "./localStorage.js";
import filterByNameReducer from "./filterByName/filterByNameReducer";
import filterByDateReducer from "./filterByDate/filterByDateReducer";
import { sortByReducer } from "./sort/sortReducers";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filterByName: filterByNameReducer,
  filterByDate: filterByDateReducer,
  sort: sortByReducer,
});

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, devToolsEnhancer());

export default store;
