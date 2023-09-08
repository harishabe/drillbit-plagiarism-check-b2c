'use client'

import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Navbar, BreadCrumb, CardView, FormComponent } from '@/app/components'
import FormJson from '@/app/constant/form/changePassword.json'
import '../../dashboard.scss'

const ChangePasswordBreadCrumb = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    active: false,
  },
  {
    name: 'Change Password',
    link: '',
    active: true,
  },
]

const ChangePassword = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <div className="page-container">
          <div className="mt-05">
            <BreadCrumb item={ChangePasswordBreadCrumb} />
          </div>
          <CardView>
            <Grid container spacing={1}>
              <Grid item md={5} xs={12}>
                <>
                  <Typography
                    gutterBottom
                    variant="h1"
                    component="div"
                    className="mb-1"
                  >
                    Change Password
                  </Typography>
                  {FormJson.map((field) => (
                    <FormComponent key={field.id} field={field} />
                  ))}
                </>
              </Grid>
            </Grid>
          </CardView>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
