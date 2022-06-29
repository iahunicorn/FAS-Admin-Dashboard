import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
  CHeader,
  CHeaderText,
} from '@coreui/react-pro'
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from 'src/store/features/product/productSlice';
import { useParams } from 'react-router-dom';


const ProductUpdate = () => {
  
  //Form Validation 
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  //Get router params
  const { productid } = useParams();

  //Dispatch Actions
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productDim.data);

  useEffect(() => {
      dispatch(getProductById({ id: productid }));
  },[]);

  console.log(data)
  console.log(JSON.stringify(productid))


  const setCustomerValues = () =>  {
    return {
      customer_name

    }
  }


  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>PRODUCT DETAILS</strong> <small>{ data.product_name }</small>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <CCol md={2}>
                <CFormInput
                  label="Customer ID"
                  type="text"
                  id="customerId"
                  value={productid}
                  disabled
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={6}>
                <CFormInput
                  label="Product Name"
                  type="text"
                  id="customerName"
                  defaultValue={data.product_name}
                  placeholder="Input name"
                  required
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="companyName">Company Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="companyyId"
                  defaultValue={data.company_id}
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4}>
                <CFormSelect id="category" label="Category">
                  <option>D2C</option>
                  <option>DST</option>
                  <option>WHS</option>
                </CFormSelect>
              </CCol>
              <CCol md={4}>
                <CFormSelect id="subcategory" label="Sub-Category">
                  <option>D2C</option>
                  <option>DST</option>
                  <option>WHS</option>
                </CFormSelect>
              </CCol>

              <CCol md={3}>
                <CFormInput
                  label="UPC"
                  type="text"
                  id="UPC"
                  defaultValue={data.upc}
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4}>
                <CFormInput
                  label="UPC Barcode"
                  type="text"
                  id="upc_barcodde"
                  defaultValue={data.upc_barcode}
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4}>
                <CFormInput
                  label="UOM"
                  type="text"
                  id="VATPostingGroup"
                  defaultValue={data.uom}
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol xs={12}>
                <CButton color="primary" type="submit">
                  Update
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ProductUpdate
