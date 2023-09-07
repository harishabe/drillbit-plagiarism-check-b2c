'use client'

import React from 'react'
import { Typography } from '@mui/material'
import { Navbar, BreadCrumb, CardView } from '@/app/components'

const AccountInfoBreadCrumb = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    active: false,
  },
  {
    name: 'Account Info',
    link: '',
    active: true,
  },
]

function Account() {
  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <div className="page-container">
          <div className="mt-05">
            <BreadCrumb item={AccountInfoBreadCrumb} />
          </div>
          <CardView>
            <Typography gutterBottom variant="h1" component="div">
              Account Info
            </Typography>
          </CardView>
        </div>
      </div>
    </div>
  )
}

export default Account
