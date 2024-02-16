import { createSlice } from "@reduxjs/toolkit";
import { ITask, TabNames, TaskCategory } from "../../utils/types";
import { getTasks } from "../asyncThunks/home";

interface IState {
  currentTabName: TabNames;
  tasks: Array<ITask>;
  categorizedTasks: Array<ITask>;
  loading: boolean;
  error: string | undefined;
  selectedCategory: TaskCategory | undefined;
}

const initialState: IState = {
  currentTabName: TabNames.TasksAvailable,
  tasks: [],
  categorizedTasks: [],
  loading: false,
  error: undefined,
  selectedCategory: undefined,
};

const homePageSlice = createSlice({
  name: "home page slice",
  initialState,
  reducers: {
    setTabName: (state, action: { payload: TabNames }) => {
      state.currentTabName = action.payload;
    },
    setCategory: (state, action: { payload: TaskCategory | undefined }) => {
      state.selectedCategory = action.payload;
    },
    setTasks: (state, action: { payload: Array<ITask> }) => {
      state.tasks = action.payload;
    },
    setCategorizedTasks: (state, action: { payload: Array<ITask> }) => {
      state.categorizedTasks = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTasks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
      state.categorizedTasks = action.payload;
    });
    builder.addCase(getTasks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { setTabName, setCategory, setTasks, setCategorizedTasks } =
  homePageSlice.actions;

export default homePageSlice.reducer;
