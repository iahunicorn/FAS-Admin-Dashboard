import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from 'src/store/middleware/directus'
import { getCountries } from 'src/store/common/actions';


export const getProducts = createAsyncThunk(
  "product/getProducts", 
  async () => {
    //Fetch all products
    return await axiosInstance
      .get('/items/product/')
      .then((res) => res.data.data)
      .catch((error) => error.message)
  }
);

export const getProductById = createAsyncThunk(
  "product/getProductById", 
  async ({ id }) => {
    //Fetch products by ID
    return await axiosInstance
      .get(`/items/product/${id}`)
      .then((res) => res.data.data)
      .catch((error) => error.message)
  }
);

export const createProduct = createAsyncThunk(
  "product/createProduct", 
  async ({values}) => {
    //Fetch all products
    return await axiosInstance
      .post(`/items/product/`, { values })
      .then((res) => res.data.data)
      .catch((error) => error.message)
  }
);

export const updateProductById = createAsyncThunk(
  "product/updateProductById", 
  async ({id}, {values}) => {
    //Fetch all products
    return await axiosInstance
      .put(`/items/product/${id}`, {values})
      .then((res) => res.data.data)
      .catch((error) => error.message)
  }
);


const productSlice = createSlice({
  name: 'product',
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
    [getProducts.pending]: (state) => {
        state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, { payload } ) => {
      state.isLoading = true;
      state.data = payload;
      state.isSuccess = true;
    },
    [getProducts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
      state.isSuccess = false;
    },
    [getProductById.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductById.fulfilled]: (state, { payload } ) => {
      state.isLoading = true;
      state.data = payload;
      state.isSuccess = true;
    },
    [getProductById.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
      state.isSuccess = false;
    }
  }
  
})

export default productSlice.reducer;