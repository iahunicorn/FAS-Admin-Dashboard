import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from 'src/store/middleware/directus'
import { getCountries } from 'src/store/common/actions';


export const getVendors = createAsyncThunk(
  "vendor/getVendors", 
  async () => {
    //Fetch all
    return await axiosInstance
      .get('/items/vendor/')
      .then((res) => res.data.data)
      .catch((error) => error.message)
  }
);

export const getVendorById = createAsyncThunk(
  "vendor/getVendorById", 
  async ({ id }) => {
    //Fetch by ID
    return await axiosInstance
      .get(`/items/vendor/${id}`)
      .then((res) => res.data.data)
      .catch((error) => error.message)
  }
);

export const createVendor = createAsyncThunk(
  "vendor/createVendor", 
  async ({values}) => {
    //Fetch all
    return await axiosInstance
      .post(`/items/vendor/`, { values })
      .then((res) => res.data.data)
      .catch((error) => error.message)
  }
);

export const updateVendorById = createAsyncThunk(
  "vendor/updateVendorById", 
  async ({id}, {values}) => {
    //Fetch all by Id
    return await axiosInstance
      .put(`/items/vendor/${id}`, {values})
      .then((res) => res.data.data)
      .catch((error) => error.message)
  }
);

const vendorSlice = createSlice({
  name: 'vendor',
  initialState: {
    data: [],
    isSuccess: false,
    isLoading: false,
    message: null,
    isUpdate: false,
    id: null,
  },
  reducers: {},
  extraReducers:  {
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
    [getVendorById.fulfilled]: (state, { payload } ) => {
      state.isLoading = true;
      state.data = payload;
      state.isSuccess = true;
    },
    [getVendorById.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
      state.isSuccess = false;
    }
  }
  
})

export default vendorSlice.reducer;