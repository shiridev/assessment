import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./slices/dashboard";
import homePageReducer from "./slices/homePage";
import loginReducer from "./slices/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    dashboard: dashboardReducer,
    homePage: homePageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
