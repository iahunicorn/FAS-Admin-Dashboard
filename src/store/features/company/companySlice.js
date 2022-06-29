import { createSlice, nanoid, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import { axiosInstance } from 'src/store/middleware/directus'
import { getCountries } from 'src/store/common/actions';

const companyAdapter = createEntityAdapter({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (comp) => comp.company_id,
  // Keep the "all IDs" array sorted based on book titles
  sortComparer: (a, b) => a.company_name.localeCompare(b.company_name),
})

export const getCompanies = createAsyncThunk(
  "company/getCompanies", 
  async () => {
    //Fetch all customers
    return await axiosInstance
      .get('/items/company/')
      .then((res) => res.data.data)
      .catch((error) => error.message)
  }
);

export const getCompanyById = createAsyncThunk(
  "company/getCompanyById", 
  async ({ id }) => {
    //Fetch company by ID
    return await axiosInstance
      .get(`/items/company/${id}`)
      .then((res) => res.data.data)
      .catch((error) => error.message)
  }
);

export const createCompany = createAsyncThunk(
  "company/createCompany", 
  async ({values}) => {
    //Fetch all
    return await axiosInstance
      .post(`/items/company/`, { values })
      .then((res) => res.data.data)
      .catch((error) => error.message)
  }
);

export const updateCompanyById = createAsyncThunk(
  "company/updateCompanyById", 
  async ({id}, {values}) => {
    //Fetch all customers
    return await axiosInstance
      .put(`/items/company/${id}`, { 
        company_name,
        company_short_name,
        email,
        phone_number,
        mobile_number,
        address1,
        address1,
        country_abbr,
        city,
        province,
        post_code,
        website,
        tax_identification_number,
        currency_code,
        business_posting_group,
        vat_posting_group,
        customer_posting_group,
        contact_first_name,
        contact_last_name,
        payment_terms,
        payment_mode 
      })
      .then((res) => res.data.data)
      .catch((error) => error.message)
  }
);


const companySlice = createSlice({
  name: 'company',
  initialState: {
    data: [],
    isSuccess: false,
    isLoading: false,
    message: null,
    isUpdate: false,
    id: null,
  },
  reducers: {
    addCompany: (state, actions) => {
      state.data.push(actions.payload);
    },
    updateCompany: (state, actions) => {
      state.data.map((co) => {
        if (co.company_id === actions.payload.company_id) {
            co.company_name = action.payload.company_name;
            co.company_short_name = action.payload.company_short_name;
        }
      });
    }
  },
  extraReducers:  {
    [getCompanies.pending]: (state) => {
        state.isLoading = true;
    },
    [getCompanies.fulfilled]: (state, { payload } ) => {
      state.isLoading = true;
      state.data = payload;
      state.isSuccess = true;
    },
    [getCompanies.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
      state.isSuccess = false;
    },
    [getCompanyById.pending]: (state) => {
      state.isLoading = true;
    },
    [getCompanyById.fulfilled]: (state, { payload } ) => {
      state.isLoading = true;
      state.data = payload;
      state.isSuccess = true;
    },
    [getCompanyById.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
      state.isSuccess = false;
    },
    [createCompany.pending]: (state) => {
      state.isLoading = true;
    },
    [createCompany.fulfilled]: (state, { payload } ) => {
      state.isLoading = true;
      state.data = payload;
      state.isSuccess = true;
    },
    [createCompany.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
      state.isSuccess = false;
    }
  }
  
})

export const { addCompany, updateCompany } = companySlice.actions;
export default companySlice.reducer;