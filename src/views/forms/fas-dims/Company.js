import React, { useState } from 'react'
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
import { DocsExample } from 'src/components'


const Company = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
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
              <CCol md={2}>
                <CFormLabel htmlFor="companyName">Company ID</CFormLabel>
                <CFormInput
                  type="text"
                  id="companyId"
                  defaultValue="0001"
                  disabled
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="companyName">Company Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="companyName"
                  defaultValue=""
                  placeholder="Input name"
                  required
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="companyName">Company Short Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="companyShortName"
                  defaultValue=""
                  placeholder="Input name"
                  required
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="customerEmail">Email</CFormLabel>
                <CFormInput
                  type="text"
                  id="customerEmail"
                  defaultValue=""
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
                    defaultValue=""
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <CFormFeedback valid>Looks good!</CFormFeedback>
                </CInputGroup>
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="address1">Address 1</CFormLabel>
                <CFormInput type="text" id="address1" required/>
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="address2">Address 2</CFormLabel>
                <CFormInput type="text" id="address2" />
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
                <CFormInput type="text" id="postalCode" />
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
                <CButton color="primary" type="submit">
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

export default Company
