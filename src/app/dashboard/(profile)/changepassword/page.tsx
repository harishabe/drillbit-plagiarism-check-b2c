'use client'

import { Grid, Typography, Card, CardContent, } from '@mui/material'
import { Navbar, BreadCrumb } from '@/app/components'
import { FormComponent } from '@/app/components'

import PasswordJson from '@/app/constant/form/changepassword.json'
import './page.scss'

const PasswordBreadCrumb = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    active: false,
  },
  {
    name: `changepassword`,
    link: '',
    active: true,
  },
]


const Changepassword = () => {

  return (
    <div className="changepassword">
    <Navbar />
    <div style={{ marginBottom: '0.5rem' }}>
            <BreadCrumb item={PasswordBreadCrumb} />
    </div>
    <Card >
    <CardContent>
    <Grid container spacing={3}>
      <Grid item md={12} xs={12} sm={12}>
        <div className="background">
            <div className="form-container">
              <Typography variant="h1">Change Password</Typography>
              <form style={{ marginTop: '1rem'}}>
                {PasswordJson
                  ? PasswordJson.map((field) => (
                      <FormComponent key={field.id} field={field} />
                    ))
                  : null}
              </form>
            </div>
          </div>
       
      </Grid>
    </Grid>
       
    </CardContent>
  </Card>
  </div>
  )
}




export default  Changepassword