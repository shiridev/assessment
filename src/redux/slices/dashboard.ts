import { createSlice } from "@reduxjs/toolkit";

interface IState {
  openDrawerMenu: boolean;
}

const initialState: IState = {
  openDrawerMenu: false,
};

const dashboardSlice = createSlice({
  name: "dashboard slice",
  initialState,
  reducers: {
    toggleDrawerMenu: (state) => {
      state.openDrawerMenu = !state.openDrawerMenu;
    },
  },
});

export const { toggleDrawerMenu } = dashboardSlice.actions;

export default dashboardSlice.reducer;
