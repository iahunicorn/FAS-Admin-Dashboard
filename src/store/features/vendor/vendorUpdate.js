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
import { useParams } from 'react-router-dom';
import { getVendorById } from 'src/store/features/vendor/vendorSlice';
import { Data } from '@react-google-maps/api';


const VendorUpdate = () => {
  
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
  const { vendorid } = useParams();

  //Dispatch Actions
  const dispatch = useDispatch();
  const data = useSelector((state) => state.vendorDim.data);

  useEffect(() => {
      dispatch(getVendorById({ id: vendorid }));
  },[]);

  console.log(data)
  console.log(JSON.stringify(vendorid))


  const setVendorValues = () =>  {
    return {
      customer_name

    }
  }

  return (
   <CRow>
     <CCol xs={12}>
       <CCard className="mb-4">
         <CCardHeader>
           <strong>VENDOR DETAILS</strong> <small> { data.vendor_name } </small>
         </CCardHeader>
         <CCardBody>
           <CForm className="row g-3 needs-validation"
             noValidate
             validated={validated}
             onSubmit={handleSubmit}
           >
             <CCol md={2}>
               <CFormLabel htmlFor="customerName">Vendor ID</CFormLabel>
               <CFormInput
                 type="text"
                 id="vendorId"
                 defaultValue={vendorid}
                 disabled
               />
               <CFormFeedback valid>Looks good!</CFormFeedback>
             </CCol>
             <CCol md={6}>
               <CFormLabel htmlFor="customerName">Vendor Name</CFormLabel>
               <CFormInput
                 type="text"
                 id="vendorName"
                 defaultValue={data.vendor_name}
                 required
               />
               <CFormFeedback valid>Looks good!</CFormFeedback>
             </CCol>
             <CCol md={4}>
               <CFormLabel htmlFor="customerType">Company Name</CFormLabel>
               <CFormSelect id="companyName">
                 <option>{data.company_id}</option>
               </CFormSelect>
             </CCol>
             <CCol md={4}>
               <CFormLabel htmlFor="customerEmail">Email</CFormLabel>
               <CFormInput
                 type="text"
                 id="customerEmail"
                 defaultValue={data.email}
                 placeholder="Input a valid email"
                 required
               />
               <CFormFeedback valid>Looks good!</CFormFeedback>
             </CCol>
             <CCol md={4}>
               <CFormLabel htmlFor="phoneNumber">Phone Number</CFormLabel>
               <CInputGroup className="has-validation">
                 <CInputGroupText id="inputGroupPrepend">+63</CInputGroupText>
                 <CFormInput
                   type="text"
                   id="phoneNumber"
                   defaultValue=""
                   aria-describedby="inputGroupPrepend"
                   required
                 />
                 <CFormFeedback valid>Looks good!</CFormFeedback>
               </CInputGroup>
             </CCol>
             <CCol md={4}>
               <CFormLabel htmlFor="mobileNumber">Mobile Number</CFormLabel>
               <CInputGroup className="has-validation">
                 <CInputGroupText id="inputGroupPrepend">+63</CInputGroupText>
                 <CFormInput
                   type="text"
                   id="mobileNumber"
                   defaultValue={data.mobile_number}
                   aria-describedby="inputGroupPrepend"
                 />
                 <CFormFeedback valid>Looks good!</CFormFeedback>
               </CInputGroup>
             </CCol>
             <CCol md={6}>
               <CFormLabel htmlFor="address1">Address 1</CFormLabel>
               <CFormInput type="text" id="address1" defaultValue={data.address1}/>
             </CCol>
             <CCol md={6}>
               <CFormLabel htmlFor="address2">Address 2</CFormLabel>
               <CFormInput type="text" id="address2" defaultValue={data.address2}/>
             </CCol>
             <CCol md={3}>
               <CFormLabel htmlFor="country">Country</CFormLabel>
               <CFormSelect id="country">
                 <option>PH</option>
                 <option>SG</option>
                 <option>AU</option>
               </CFormSelect>
             </CCol>
             <CCol md={3}>
               <CFormLabel htmlFor="city">City</CFormLabel>
               <CFormSelect id="city">
                 <option>PH</option>
                 <option>SG</option>
                 <option>AU</option>
               </CFormSelect>
             </CCol>
             <CCol md={3}>
               <CFormLabel htmlFor="province">Province</CFormLabel>
               <CFormSelect id="province">
                 <option>PH</option>
                 <option>SG</option>
                 <option>AU</option>
               </CFormSelect>
             </CCol>
             <CCol md={3}>
               <CFormLabel htmlFor="postalCode">Zip Code</CFormLabel>
               <CFormInput type="text" id="postalCode" defaultValue={data.post_code} />
               <CFormFeedback valid></CFormFeedback>
             </CCol>
             <CCol md={4}>
               <CFormLabel htmlFor="bankName">Bank Name</CFormLabel>
               <CFormInput
                 type="text"
                 id="bankName"
                 defaultValue={data.bank_name}
               />
               <CFormFeedback valid>Looks good!</CFormFeedback>
             </CCol>
             <CCol md={4}>
               <CFormLabel htmlFor="bankAccountNumber">Bank Account Number</CFormLabel>
               <CFormInput
                 type="text"
                 id="bankAccountNumber"
                 defaultValue={data.bank_account_number}
               />
               <CFormFeedback valid>Looks good!</CFormFeedback>
             </CCol>
             <CCol md={4}>
               <CFormLabel htmlFor="defaultCurrency">Default Currency</CFormLabel>
               <CFormSelect id="defaultCurrency">
                 <option>{ !data.currency_code ? "" : data.currency_code }</option>
                 <option>SGD</option>
                 <option>AUD</option>
               </CFormSelect>
             </CCol>
             <CCol md={3}>
               <CFormLabel htmlFor="paymentTerms">Payment Terms</CFormLabel>
               <CFormSelect id="paymentTerms">
                 <option>50 PCT DP Required</option>
                 <option>EOM</option>
                 <option>NET 10</option>
               </CFormSelect>
             </CCol>
             <CCol md={3}>
               <CFormLabel htmlFor="paymentMode">Payment Mode</CFormLabel>
               <CFormSelect id="paymentMode">
                 <option>Bank Transfer</option>
                 <option>COD</option>
                 <option>Mobile Payment</option>
               </CFormSelect>
             </CCol>
             <CCol md={12}></CCol>
             <CCol md={4}>
               <CFormLabel htmlFor="businessPostingGroup">Business Posting Group</CFormLabel>
               <CFormInput
                 type="text"
                 id="businessPostingGroup"
                 defaultValue={data.business_posting_group}
               />
               <CFormFeedback valid>Looks good!</CFormFeedback>
             </CCol>
             <CCol md={4}>
               <CFormLabel htmlFor="VATPostingGroup">VAT Posting Group</CFormLabel>
               <CFormInput
                 type="text"
                 id="VATPostingGroup"
                 defaultValue={data.vat_posting_group}
               />
               <CFormFeedback valid>Looks good!</CFormFeedback>
             </CCol>
             <CCol md={4}>
               <CFormLabel htmlFor="vendorPostingGroup">Vendor Posting Group</CFormLabel>
               <CFormInput
                 type="text"
                 id="vendorPostingGroup"
                 defaultValue={data.vendor_posting_group}
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

export default VendorUpdate
