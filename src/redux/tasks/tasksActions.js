export const ActionType = {
  GET_TASKS: "GET_TASKS",
  ADD_TASK: "ADD_TASK",
  DELETE_TASK: "DELETE_TASK",
  COMPLETE_TASK: "COMPLETE_TASK",
};

// Regular todo upload (from json or else)

export const getTasks = (tasks) => ({
  type: ActionType.GET_TASKS,
  payload: { tasks },
});
///
export const addTask = (task) => ({
  type: ActionType.ADD_TASK,
  payload: { task },
});

export const deleteTask = (id) => ({
  type: ActionType.DELETE_TASK,
  payload: id,
});

export const completeTask = (id) => ({
  type: ActionType.COMPLETE_TASK,
  payload: id,
});
