import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import enquiryService from "../enquiries/enquiryService";

const initialState = {
  enquirys: [],
  enquiry: {},
  enquiryIDs:[],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createEnquiry = createAsyncThunk(
  "enquirys/create",
  async (enquiryData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await enquiryService.createEnquiry(enquiryData, token);
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

export const getEnquirys = createAsyncThunk(
  "enquirys/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await enquiryService.getEnquirys(token);
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


export const getEnquiry = createAsyncThunk(
  "enquirys/get",
  async (enquiryId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await enquiryService.getEnquiry(enquiryId, token);
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


export const closeEnquiry = createAsyncThunk(
  "enquirys/close",
  async (enquiryId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await enquiryService.closeEnquiry(enquiryId, token);
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

export const getEnquiryIDs = createAsyncThunk(
  "enquirys/getAllIDs",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await enquiryService.getEnquiryIDs(token);
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

export const getEnquiryByID = createAsyncThunk(
  "enquirys/getByEnquiryID",
  async (enquiryId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await enquiryService.getEnquiryByID(enquiryId, token);
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

export const enquirySlice = createSlice({
  name: "enquiry",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createEnquiry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createEnquiry.fulfilled, (state) => {
        console.log(state.enquiry)
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createEnquiry.rejected, (state, action) => {
        console.log(state.enquiry)
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getEnquirys.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEnquirys.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.enquirys = action.payload;
      })
      .addCase(getEnquirys.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getEnquiry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEnquiry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.enquiry = action.payload;
      })
      .addCase(getEnquiry.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(closeEnquiry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.enquirys.map((enquiry)=> enquiry._id === action.payload._id ?
        (enquiry.status = 'closed') : enquiry )
      })
      .addCase(getEnquiryIDs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEnquiryIDs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.enquiryIDs = action.payload;
      })
      .addCase(getEnquiryIDs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getEnquiryByID.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEnquiryByID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.enquiry = action.payload;
      })
      .addCase(getEnquiryByID.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export const { reset } = enquirySlice.actions;

export default enquirySlice.reducer;
