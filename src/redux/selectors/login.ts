import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectloginStates = (state: RootState) => state.login;

export const selectLoginInputsData = createSelector(
  [selectloginStates],
  (loginStates) => {
    return {
      username: loginStates.username,
      password: loginStates.password,
      loading: loginStates.loading,
      token: loginStates.token,
      error: loginStates.error,
    };
  }
);
