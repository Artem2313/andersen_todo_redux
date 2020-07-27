import { createSelector } from "reselect";

export const tasks = (state) => state.tasks;

export const filterName = (state) => state.filterByName;
export const filterDate = (state) => state.filterByDate;

export const filteredByDate = createSelector(
  [tasks, filterDate],
  (tasks, filterDate) =>
    tasks.filter((task) => {
      if (filterDate === null) {
        return task;
      } else {
        const newDateFromTask = new Date(task.date);
        const newDateFromFilter = new Date(filterDate);
        const checkDateTask = `${newDateFromTask.getDate()}/${
          newDateFromTask.getMonth() + 1
        }/${newDateFromTask.getFullYear()}`;
        const checkDateFilter = `${newDateFromFilter.getDate()}/${
          newDateFromFilter.getMonth() + 1
        }/${newDateFromFilter.getFullYear()}`;

        return checkDateTask === checkDateFilter;
      }
    })
);

export const filteredByDateAndName = createSelector(
  [filteredByDate, filterName],
  (tasks, filter) =>
    tasks.filter((task) =>
      task.text.toLowerCase().includes(filter.toLowerCase())
    )
);
