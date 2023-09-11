'use client'

import { useRouter } from 'next/navigation'
import { Grid, Typography } from '@mui/material'
import { DrillBitLogo } from 'public/assets'
import { FormComponent } from '@/app/components'

import './page.scss'
import FormJson from '@/app/constant/form/loginForm.json'

const Login = () => {
  const router = useRouter()

  const handleSubmit = () => {
    router.push('/dashboard')
  }

  return (
    <div className="login">
      <Grid container spacing={3}>
        <Grid item md={12} xs={12} sm={12}>
          <div className="background">
            <DrillBitLogo />
            <div className="image-contaner">
              <div className="form-container">
                <Typography variant="h1">Welcome to DrillBit</Typography>
                <form onClick={handleSubmit}>
                  {FormJson
                    ? FormJson.map((field) => (
                        <FormComponent key={field.id} field={field} />
                      ))
                    : null}
                </form>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Login
