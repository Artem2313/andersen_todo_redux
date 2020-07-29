export const ActionType = {
  FILTER_TASKS_NAME: "FILTER_TASKS_NAME",
};

export const filterByName = (filter) => ({
  type: ActionType.FILTER_TASKS_NAME,
  payload: { filter },
});
