import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react-pro'
import { DatabaseAPI } from 'src/components'

const UserTable = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Users</strong> <small>All Records</small>
          </CCardHeader>
          <CCardBody>
            <DatabaseAPI tablename='/users' querytype='fields=' query='first_name,last_name,email,status' uid=''/>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    
  )
}

export default UserTable