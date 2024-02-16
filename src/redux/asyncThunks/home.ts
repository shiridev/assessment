import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTasksRequest } from "../../services/home";
import { ITask } from "../../utils/types";

export const getTasks = createAsyncThunk<Array<ITask>>(
  "home/getAllTasks",
  async (_, { rejectWithValue }) => {
    const response = await getAllTasksRequest();
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(response.data);
    }
    return response.data;
  }
);
