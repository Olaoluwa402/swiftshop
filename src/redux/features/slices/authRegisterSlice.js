import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../services/authService";
import { toast } from "react-toastify";

// asynchronous redux action
export const registerAction = createAsyncThunk(
  "auth/register",
  async (
    { fisrtName, lastName, username, phone, email, password },
    thunkAPI
  ) => {
    try {
      const response = await registerUser({
        fisrtName,
        lastName,
        username,
        phone,
        email,
        password,
      });
      return response;
    } catch (error) {
      const message =
        error.response && error.response.data.errors
          ? error.response.data.errors.join(",")
          : error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      console.log(message, "error");
      toast.warning(`${message}`);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const registerSlice = createSlice({
  name: "auth/register",
  initialState: {
    user: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    // synchronous reducers
    reset: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
      state.success = false;
    },
    clearRegisterError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.success = true;
      })
      .addCase(registerAction.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { reset, clearRegisterError } = registerSlice.actions;
export default registerSlice.reducer;
