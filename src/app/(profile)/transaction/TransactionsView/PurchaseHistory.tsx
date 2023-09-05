'use client'

import React from 'react'
import PaymentSubmissionTable from './TableView'
import { purchaseHistory } from 'public/assets/mockData/data'

const headerdata = [
  { id: 'id', label: 'Transaction ID' },
  { id: 'pages', label: 'Number of Pages' },
  { id: 'date', label: 'Date & Time' },
  { id: 'amount', label: 'Payment Amount' },
  { id: 'method', label: 'Payment Method' },
  { id: 'status', label: 'Status' },
]
const PurchaseHistory = () => {
  return (
    <PaymentSubmissionTable
      headerdata={headerdata}
      purchaseData={purchaseHistory}
    />
  )
}

export default PurchaseHistory
