import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { axiosInstance } from 'src/store/middleware/directus';

//Methods for Entities
const vendorAdapter = createEntityAdapter();

//Initial State
const initialState = {
  data: [],
  isSuccess: false,
  isLoading: false,
  message: null,
  isUpdate: false,
  id: null,
}

export const getVendors = createAsyncThunk(
  'vendor/getVendors', 
  async () => {
    return await axiosInstance.get('/items/vendor/')
    .then((res) => res.data.data)
    .catch((error) => error.message)
});


export const getVendorById = createAsyncThunk(
  "vendor/getVendorById", 
  async ({id}) => {
    //Fetch vendor by ID
    return await axiosInstance
      .get(`/items/vendor/${id}`)
      .then((res) => res.data.data)
      .catch((error)=>console.log( error.response.request._response))
  }
);

export const createVendor = createAsyncThunk(
  "vendor/createVendor", 
  async (payload) => {
    return await axiosInstance
      .post(`items/vendor/`, payload)
      .then((res)=>res.data.data)
      .catch((error)=>console.log( error.response.request._response))
  }
);

export const updateVendor = createAsyncThunk(
  "vendor/updateVendor", 
  async (payload) => {
    return await axiosInstance
      .post(`items/vendor/`, payload)
      .then((res)=>res.data.data)
      .catch((error)=>console.log( error.response.request._response))
  }
);

const vendorSlice = createSlice({
  name: 'vendor',
  initialState,
  reducers: {},
  extraReducers: {
    [getVendors.pending]: (state) => {
      state.isLoading = true;
    },
    [getVendors.fulfilled]: (state, { payload } ) => {
      state.isLoading = true;
      state.data = payload;
      state.isSuccess = true;
    },
    [getVendors.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
      state.isSuccess = false;
    },
    [getVendorById.pending]: (state) => {
      state.isLoading = true;
    },
    [getVendorById.fulfilled]: (state, { payload }) => {
      state.isLoading = true;
      state.data = payload;
      state.isSuccess = true;
    },
    [getVendorById.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
      state.isSuccess = false;
    },
    [createVendor.pending]: (state) => {
      state.isLoading = true;
    },
    [createVendor.fulfilled]: (state, { payload }) => {
      state.data = [payload]
      state.isSuccess = true;
    },
    [createVendor.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
      state.isSuccess = false;
    },
    [updateVendor.pending]: (state) => {
      state.isLoading = true;
    },
    [updateVendor.fulfilled]: (state, { payload }) => {
      state.data = [payload]
      state.isSuccess = true;
    },
    [updateVendor.rejected]: (state, { payload } ) => {
      state.isLoading = false;
      state.message = payload;
      state.isSuccess = false;
    },
  }
})

export default vendorSlice.reducer;

export const selectAllVendors = (state) => state.vendor.data
export const getVendorStatus = (state) => state.vendor.isSuccess
export const getVendorError = (state) => state.vendor.message