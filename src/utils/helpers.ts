import { ITask, TaskCategory, TaskStatus } from "./types";

export const getCategorizedTasksBasedOnStatus = (
  status: TaskStatus,
  categorizedTasks: Array<ITask>
) => {
  const t: Array<ITask> = [];
  categorizedTasks.forEach((task: ITask) => {
    if (task.status === status) {
      t.push(task);
    }
  });
  return t;
};

export const getTasksBasedOnStatus = (
  status: TaskStatus,
  allTasks: Array<ITask>
) => {
  const t: Array<ITask> = [];
  allTasks.forEach((task: ITask) => {
    if (task.status === status) {
      t.push(task);
    }
  });
  return t;
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const generateYearsArray = (startYear: number, endYear: number) => {
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(String(year)); // Convert year to string and push it into the array
  }
  return years;
};

export const getCategorizedTasks = (
  selectedCategory: TaskCategory,
  allTasks: Array<ITask>
) => {
  const categorizedTasks: Array<ITask> = [];
  allTasks.forEach((task) => {
    if (task.category === selectedCategory && task.status === TaskStatus.New) {
      categorizedTasks.push(task);
    }
  });
  return categorizedTasks;
};
