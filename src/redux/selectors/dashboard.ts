import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectDashboardStates = (state: RootState) => state.dashboard;

export const selectOpenDrawerMenuState = createSelector(
  [selectDashboardStates],
  (dashboardStates) => {
    return dashboardStates.openDrawerMenu;
  }
);
