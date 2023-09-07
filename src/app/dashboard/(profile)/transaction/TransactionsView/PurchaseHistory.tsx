'use client'

import React, { useState } from 'react'
import { DialogModal, FormComponent } from '@/app/components'
import PaymentSubmissionTable from './TableView'
import { purchaseHistory } from 'public/assets/mockData/data'
import FormJson from '@/app/constant/form/filterForm.json'

const headerdata = [
  { id: 'id', label: 'Transaction ID' },
  { id: 'pages', label: 'Number of Pages' },
  { id: 'date', label: 'Date & Time' },
  { id: 'amount', label: 'Payment Amount' },
  { id: 'method', label: 'Payment Method' },
  { id: 'status', label: 'Status' },
]
const PurchaseHistory = () => {
  const [isFilter, setIsFiltered] = useState(false)

  const handleFilter = () => {
    setIsFiltered(true)
  }

  const handleClose = () => {
    setIsFiltered(false)
  }

  return (
    <>
      {isFilter && (
        <DialogModal
          isOpen={isFilter}
          headingTitle="Filter Items"
          maxWidth={'xs'}
          children={
            FormJson
              ? FormJson.map((field) => (
                  <FormComponent key={field.id} field={field} />
                ))
              : null
          }
          handleClose={handleClose}
        />
      )}
      <PaymentSubmissionTable
        headerdata={headerdata}
        purchaseData={purchaseHistory}
        handleFilter={handleFilter}
      />
    </>
  )
}

export default PurchaseHistory
