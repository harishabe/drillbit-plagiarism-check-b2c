'use client'

import React, { useState } from 'react'
import { DialogModal, FormComponent } from '@/app/components'
import PaymentSubmissionTable from './TableView'
import { submissionHistory } from 'public/assets/mockData/data'
import FormJson from '@/app/constant/form/filterForm.json'

const headerdata = [
  { id: 'paper_id', label: 'Paper ID' },
  { id: 'file_name', label: 'File Name' },
  { id: 'date', label: 'Date & Time' },
  { id: 'pages', label: 'Number Of Pages' },
  { id: 'no_of_words', label: 'Number Of Words' },
  { id: 'status', label: 'Status' },
]

const SubmissionHistory = () => {
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
        purchaseData={submissionHistory}
        handleFilter={handleFilter}
      />
    </>
  )
}

export default SubmissionHistory
