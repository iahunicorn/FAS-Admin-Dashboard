import { configureStore } from "@reduxjs/toolkit";

import changeState from "./store/coreuistate/changeState";
import customerSlice from "./store/features/customer/customerSlice";
import vendorSlice from "./store/features/vendor/vendorSlice";
import productSlice from "./store/features/product/productSlice";
import companySlice from "./store/features/company/companySlice";
import userSlice from "./store/features/user/userSlice";

const store = configureStore({
  reducer: {
    coreuistate: changeState,
    customerDim: customerSlice,
    vendorDim: vendorSlice,
    productDim: productSlice,
    companyDim: companySlice,
    userDim: userSlice,
  }
})

export default store;