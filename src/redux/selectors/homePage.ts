import { createSelector } from "@reduxjs/toolkit";
import { TaskStatus } from "../../utils/types";
import { RootState } from "../store";

const selectHomePageStates = (state: RootState) => state.homePage;

export const selectCurrantTab = createSelector(
  [selectHomePageStates],
  (homePageStates) => {
    return homePageStates.currentTabName;
  }
);

export const selectAllTasks = createSelector(
  [selectHomePageStates],
  (homePageStates) => {
    return homePageStates.tasks;
  }
);

export const selectNewTasks = createSelector(
  [selectHomePageStates],
  (homePageStates) => {
    const newTasks = homePageStates.tasks.filter(
      (task) => task.status === TaskStatus.New
    );
    const states = {
      loading: homePageStates.loading,
      newTasks: newTasks,
      error: homePageStates.error,
    };
    return states;
  }
);

export const selectInProgressTasks = createSelector(
  [selectHomePageStates],
  (homePageStates) => {
    const inProgressTasks = homePageStates.tasks.filter(
      (task) => task.status === TaskStatus.InProgress
    );
    const states = {
      loading: homePageStates.loading,
      inProgressTasks: inProgressTasks,
      error: homePageStates.error,
    };
    return states;
  }
);

export const selectSelectedCategory = createSelector(
  [selectHomePageStates],
  (homePageStates) => {
    return homePageStates.selectedCategory;
  }
);

export const selectCategorizedTasks = createSelector(
  [selectHomePageStates],
  (homePageStates) => {
    return homePageStates.categorizedTasks;
  }
);
