import { createSlice } from "@reduxjs/toolkit";
import { login } from "../asyncThunks/login";

interface IState {
  username: string;
  password: string;
  loading: boolean;
  token: string | undefined;
  error: string | undefined;
}

const initialState: IState = {
  username: "",
  password: "",
  loading: false,
  token: undefined,
  error: undefined,
};

const loginSlice = createSlice({
  name: "login slice",
  initialState,
  reducers: {
    setUsername: (state, action: { payload: string }) => {
      state.username = action.payload;
    },
    setPassword: (state, action: { payload: string }) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { setUsername, setPassword } = loginSlice.actions;

export default loginSlice.reducer;
