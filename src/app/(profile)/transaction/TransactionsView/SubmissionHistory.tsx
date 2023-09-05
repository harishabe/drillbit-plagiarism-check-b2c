'use client'

import React from 'react'
import PaymentSubmissionTable from './TableView'
import { submissionHistory } from 'public/assets/mockData/data'

const headerdata = [
  { id: 'paper_id', label: 'Paper ID' },
  { id: 'file_name', label: 'File Name' },
  { id: 'date', label: 'Date & Time' },
  { id: 'pages', label: 'Number Of Pages' },
  { id: 'no_of_words', label: 'Number Of Words' },
  { id: 'status', label: 'Status' },
]

const SubmissionHistory = () => {
  return (
    <PaymentSubmissionTable
      headerdata={headerdata}
      purchaseData={submissionHistory}
    />
  )
}

export default SubmissionHistory
