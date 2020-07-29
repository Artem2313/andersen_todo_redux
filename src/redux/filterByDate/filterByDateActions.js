export const ActionType = {
  FILTER_TASKS_DATE: "FILTER_TASKS_DATE",
};

export const filterByDate = (filter) => ({
  type: ActionType.FILTER_TASKS_DATE,
  payload: { filter },
});
