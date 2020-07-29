import { createSelector } from "reselect";

export const tasks = (state) => state.tasks;

export const filterName = (state) => state.filterByName;
export const filterDate = (state) => state.filterByDate;
export const sortBy = (state) => state.sort;

export const filteredByDate = createSelector(
  [tasks, filterDate],
  (tasks, filterDate) =>
    tasks.filter((task) => {
      if (filterDate === "") {
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

export const sortedArray = createSelector(
  [filteredByDateAndName, sortBy],
  (tasks, sort) => {
    let initialTasks = tasks.slice();
    switch (sort) {
      case "nameAsc":
        return initialTasks.slice().sort((a, b) => {
          const nameA = a.text.toLowerCase();
          const nameB = b.text.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
      case "nameDsc":
        return initialTasks.slice().sort((a, b) => {
          const nameA = a.text.toLowerCase();
          const nameB = b.text.toLowerCase();
          if (nameA > nameB) return -1;
          if (nameA < nameB) return 1;
          return 0;
        });
      case "dateAsc":
        return initialTasks.slice().sort((a, b) => {
          const dateA = a.date;
          const dateB = b.date;
          return new Date(dateB) - new Date(dateA);
        });
      case "dateDsc":
        return initialTasks.slice().sort((a, b) => {
          const dateA = a.date;
          const dateB = b.date;
          return new Date(dateA) - new Date(dateB);
        });
      case "sortClear":
        return initialTasks;
      default:
        return tasks;
    }
  }
);
