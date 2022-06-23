import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react-pro'
import { DatabaseAPI } from 'src/components'

const CustomerTable = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Customer</strong> <small>All Records</small>
          </CCardHeader>
          <CCardBody>
            <DatabaseAPI tablename='/items/customer' querytype='fields=' query='customer_name,company_name,city,status' uid='customer_id'/>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    
  )
}

export default CustomerTable