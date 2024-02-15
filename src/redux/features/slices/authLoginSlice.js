import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../services/authService";
import { toast } from "react-toastify";

// asynchronous redux action
export const loginAction = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await loginUser({ email, password });
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

export const logoutAction = () => (dispatch, getState) => {
  dispatch(reset());
  //clear from local storage
  localStorage.removeItem("persist:root");
};

const loginSlice = createSlice({
  name: "auth/login",
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
    clearLoginError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.success = true;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { reset, clearLoginError } = loginSlice.actions;
export default loginSlice.reducer;
