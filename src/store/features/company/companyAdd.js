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
  CInputGroup,
  CInputGroupText,
  CRow,
  CHeader,
  CHeaderText,
} from '@coreui/react-pro'
import { useSelector, useDispatch } from 'react-redux';


const CompanyAdd = () => {
  
  //Get initial data
  const data = useSelector((state) => state.companyDim.data);
  const dispatch = useDispatch();

  //Set Fields
  const [companyName, setCompanyName] = useState('');
  const [companyShortName, setCompanyShortName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [zip, setZip] = useState('');
  const [website, setWebsite] = useState('');
  const [tin, setTin] = useState('');
  const [defaultCurrency, setDefaultCurrency] = useState('');
  const [businessPostingGroup, setBusinessPostingGroup] = useState('');
  const [vatPostingGroup, setVatPostingGroup] = useState('');
  const [customerPostingGroup, setCustomerPostingGroup] = useState('');
  const [firstName, setFirstName] = useState('');
  const [paymentTerms, setPaymentTerms] = useState('');
  const [paymentMode, setPaymentMode] = useState('');


  //Form Validation 
  const [validated, setValidated] = useState(false)

  //Submit Form
  const handleSubmit = (e) => {
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Add New Company</strong> <small></small>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <CCol md={8}>
                <CFormInput
                  label="Company Name"
                  type="text"
                  id="company_name"
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4}>
                <CFormInput
                  label="Company Short Name"
                  type="text"
                  id="company_short_name"
                  onChange={(e) => setCompanyShortName(e.target.value)}
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4}>
                <CFormInput
                  label="Email"
                  type="text"
                  id="email"
                  placeholder="Input a valid email"
                  onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPhoneNumber(e.target.value)}
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
                    aria-describedby="inputGroupPrepend"
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                  <CFormFeedback valid>Looks good!</CFormFeedback>
                </CInputGroup>
              </CCol>
              <CCol md={6}>
                <CFormInput 
                  label="Address 1"
                  type="text" 
                  id="address1" 
                  onChange={(e) => setAddress1(e.target.value)}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput 
                  label="Address 2"
                  type="text" 
                  id="address1" 
                  onChange={(e) => setAddress2(e.target.value)}
                />
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
                <CFormInput 
                  label="Zip Code"
                  type="text" 
                  id="postalCode" 
                  onChange={(e) => setZipCode(e.target.value)}
                />
                <CFormFeedback valid></CFormFeedback>
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="website">Website</CFormLabel>
                <CFormInput type="text" id="website" />
                <CFormFeedback valid></CFormFeedback>
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="tin">TIN</CFormLabel>
                <CFormInput
                  type="text"
                  id="tin"
                  defaultValue=""
                  placeholder=""
                  required
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="defaultCurrency">Default Currency</CFormLabel>
                <CFormSelect id="defaultCurrency">
                  <option>USD</option>
                  <option>SGD</option>
                  <option>AUD</option>
                </CFormSelect>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="businessPostingGroup">Business Posting Group</CFormLabel>
                <CFormInput
                  type="text"
                  id="businessPostingGroup"
                  defaultValue=""
                  placeholder=""
                  required
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="VATPostingGroup">VAT Posting Group</CFormLabel>
                <CFormInput
                  type="text"
                  id="VATPostingGroup"
                  defaultValue=""
                  placeholder=""
                  required
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="customerPostingGroup">Customer Posting Group</CFormLabel>
                <CFormInput
                  type="text"
                  id="customerPostingGroup"
                  defaultValue=""
                  placeholder=""
                  required
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={12}>
                <CHeader>
                  <CHeaderText>
                    <strong>TERMS</strong>
                  </CHeaderText>
                </CHeader>
              </CCol>
              <CCol md={12}>
                <CInputGroup>
                  <CInputGroupText>Contact Person</CInputGroupText>
                  <CFormInput aria-label="First name" type="text" placeholder="First Name"/>
                  <CFormInput aria-label="Last name" type="text" placeholder="Last Name"/>
                </CInputGroup>
                <CFormFeedback valid>Looks good!</CFormFeedback>
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
              <CCol xs={12}>
                <CButton 
                  color="primary" 
                  type="submit">
                  Submit Form
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CompanyAdd
