import { ActionType } from "./filterByDateActions";

const filterByDateReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FILTER_TASKS_DATE:
      return payload.filter;

    default:
      return state;
  }
};

export default filterByDateReducer;
