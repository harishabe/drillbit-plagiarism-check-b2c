'use client'

import React from 'react'
import { Navbar, BreadCrumb, TabMenu } from '@/app/components'
import PurchaseHistory from './TransactionsView/PurchaseHistory'
import SubmissionHistory from './TransactionsView/SubmissionHistory'
import '../../dashboard.scss'

const TransactionBreadCrumb = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    active: false,
  },
  {
    name: 'Transaction History',
    link: '',
    active: true,
  },
]

const tabMenuItems = ['Purchase history', 'Submission history']
const components = [<PurchaseHistory />, <SubmissionHistory />]

const TransactionHistory = () => {
  return (
    <div className="dashboard">
      <div className="page-container">
        <BreadCrumb item={TransactionBreadCrumb} />
        <div className="container">
          <TabMenu menuButton={tabMenuItems} components={components} />
        </div>
      </div>
    </div>
  )
}

export default TransactionHistory
