import { ActionType } from "./filterByNameActions";

const filterByNameReducer = (state = "", { type, payload }) => {
  switch (type) {
    case ActionType.FILTER_TASKS_NAME:
      return payload.filter;

    default:
      return state;
  }
};

export default filterByNameReducer;
