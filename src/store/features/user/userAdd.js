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


const UserAdd = () => {
  
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

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Add New User</strong> <small></small>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <CCol md={2}>
                <CFormInput
                  label="User ID"
                  type="text"
                  id="userid"
                  defaultValue="0001"
                  disabled
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={6}>
                <CFormInput
                  label="First Name"
                  type="text"
                  id="first_name"
                  defaultValue=""
                  placeholder="First Name"
                  required
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={6}>
                <CFormInput
                  label="Last Name"
                  type="text"
                  id="last_name"
                  defaultValue=""
                  placeholder="Last Name"
                  required
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol xs={12}></CCol>
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

export default UserAdd
