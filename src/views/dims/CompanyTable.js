import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react-pro'
import { DatabaseAPI } from 'src/components'

const CompanyTable = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Company</strong> <small>All Records</small>
          </CCardHeader>
          <CCardBody>
            <DatabaseAPI tablename='/items/company' querytype='fields=' query='company_name,payment_terms,phone_number,mobile_number,status' uid='company_id'/>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    
  )
}

export default CompanyTable