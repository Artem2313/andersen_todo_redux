import { ActionType } from "./sortActions";

export const sortByReducer = (state = "", { type, payload }) => {
  switch (type) {
    case ActionType.SORT_BY:
      return payload.sort;
    default:
      return state;
  }
};
