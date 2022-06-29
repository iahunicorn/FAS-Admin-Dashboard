import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from 'src/store/middleware/directus'
import { getCountries } from 'src/store/common/actions';


export const getCustomers = createAsyncThunk(
  "customer/getCustomers", 
  async () => {
    //Fetch all customers
    return await axiosInstance
      .get('/items/customer/')
      .then((res) => res.data.data)
      .catch((error) => error.message)
  }
);

export const getCustomerById = createAsyncThunk(
  "customer/getCustomerById", 
  async ({ id }) => {
    //Fetch customers by ID
    return await axiosInstance
      .get(`/items/customer/${id}`)
      .then((res) => res.data.data)
      .catch((error) => error.message)
  }
);

export const createCustomer = createAsyncThunk(
  "customer/createCustomer", 
  async ({values}) => {
    //Fetch all customers
    return await axiosInstance
      .post(`/items/customer/`, { values })
      .then((res) => res.data.data)
      .catch((error) => error.message)
  }
);

export const updateCustomerById = createAsyncThunk(
  "customer/updateCustomerById", 
  async ({id}, {values}) => {
    //Fetch all customers
    return await axiosInstance
      .put(`/items/customer/${id}`, {values})
      .then((res) => res.data.data)
      .catch((error) => error.message)
  }
);



const customerSlice = createSlice({
  name: 'customer',
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
    [getCustomers.pending]: (state) => {
        state.isLoading = true;
    },
    [getCustomers.fulfilled]: (state, { payload } ) => {
      state.isLoading = true;
      state.data = payload;
      state.isSuccess = true;
    },
    [getCustomers.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
      state.isSuccess = false;
    },
    [getCustomerById.pending]: (state) => {
      state.isLoading = true;
    },
    [getCustomerById.fulfilled]: (state, { payload } ) => {
      state.isLoading = true;
      state.data = payload;
      state.isSuccess = true;
    },
    [getCustomerById.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
      state.isSuccess = false;
    }
  }
  
})

export default customerSlice.reducer;