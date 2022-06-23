import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react-pro'
import { DatabaseAPI } from 'src/components'

const VendorTable = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Vendor</strong> <small>All Records</small>
          </CCardHeader>
          <CCardBody>
            <DatabaseAPI tablename='/items/vendor' querytype='fields=' query='vendor_id,vendor_name,status' uid='vendor_id'/>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    
  )
}

export default VendorTable