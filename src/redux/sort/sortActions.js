export const ActionType = {
  SORT_BY: "SORT_BY",
};

export const sortBy = (sort) => ({
  type: ActionType.SORT_BY,
  payload: { sort },
});
