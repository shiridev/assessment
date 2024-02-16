import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequest } from "../../services/login";
import { IAuth, LoginCredentials } from "../../utils/types";

export const login = createAsyncThunk<IAuth, LoginCredentials>(
  "user/login",
  async ({ username, password }, { rejectWithValue }) => {
    const response = await loginRequest(username, password);
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(response.data);
    }
    return response.data;
  }
);
