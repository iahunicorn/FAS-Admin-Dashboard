import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from 'src/store/middleware/directus'
import { getCountries } from 'src/store/common/actions';


export const getUsers = createAsyncThunk(
  "user/getUsers", 
  async () => {
    //Fetch all customers
    return await axiosInstance
      .get('/users/')
      .then((res) => res.data.data)
      .catch((error) => error.message)
  }
);

export const getUserById = createAsyncThunk(
  "user/getUserById", 
  async ({ id }) => {
    //Fetch customers by ID
    return await axiosInstance
      .get(`/users/${id}`)
      .then((res) => res.data.data)
      .catch((error) => error.message)
  }
);

export const createUser = createAsyncThunk(
  "user/createUser", 
  async ({values}) => {
    //Fetch all
    return await axiosInstance
      .post(`/users/`, { payload: values })
      .then((res) => res.data.data)
      .catch((error) => error.message)
  }
);

export const updateUserById = createAsyncThunk(
  "user/updateUserById", 
  async ({id}, {values}) => {
    //Fetch all customers
    return await axiosInstance
      .put(`/users/${id}`, { payload: values })
      .then((res) => res.data.data)
      .catch((error) => error.message)
  }
);



const userSlice = createSlice({
  name: 'user',
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
    [getUsers.pending]: (state) => {
        state.isLoading = true;
    },
    [getUsers.fulfilled]: (state, { payload } ) => {
      state.isLoading = true;
      state.data = payload;
      state.isSuccess = true;
    },
    [getUsers.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
      state.isSuccess = false;
    },
    [getUserById.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserById.fulfilled]: (state, { payload } ) => {
      state.isLoading = true;
      state.data = payload;
      state.isSuccess = true;
    },
    [getUserById.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
      state.isSuccess = false;
    }
  }
  
})

export default userSlice.reducer;