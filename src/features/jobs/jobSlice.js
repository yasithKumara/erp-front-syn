import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jobService from "../jobs/jobService";

const initialState = {
  jobs: [],
  job: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createJob = createAsyncThunk(
  "jobs/create",
  async (jobData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await jobService.createJob(jobData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getJobs = createAsyncThunk(
  "jobs/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await jobService.getJobs(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const getJob = createAsyncThunk(
  "jobs/get",
  async (jobId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await jobService.getJob(jobId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const closeJob = createAsyncThunk(
  "jobs/close",
  async (jobId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await jobService.closeJob(jobId, token);
    } catch (error) {
      const message =
        (error.response && 
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state) => {
        console.log(state.job)
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createJob.rejected, (state, action) => {
        console.log(state.job)
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.jobs = action.payload;
      })
      .addCase(getJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.job = action.payload;
      })
      .addCase(getJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(closeJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs.map((job)=> job._id === action.payload._id ?
        (job.status = 'closed') : job )
      })
  },
});

export const { reset } = jobSlice.actions;

export default jobSlice.reducer;
