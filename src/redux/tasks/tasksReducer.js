import { ActionType } from "./tasksActions";

const tasksReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.GET_TASKS:
      return payload;

    case ActionType.ADD_TASK:
      return [...state, payload.task];

    case ActionType.DELETE_TASK:
      return state.filter((task) => task.id !== payload);

    case ActionType.COMPLETE_TASK:
      return state.map((task) =>
        task.id === payload ? { ...task, completed: !task.completed } : task
      );

    default:
      return state;
  }
};

export default tasksReducer;
