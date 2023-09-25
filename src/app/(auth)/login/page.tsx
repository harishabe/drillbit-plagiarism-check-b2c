'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { Grid, Button } from '@mui/material'
import {
  DrillBitLogo,
  GoogleLogo,
  FacebookLogo,
  LinkedInLogo,
} from 'public/assets'
import { FormComponent } from '@/app/components'

import './page.scss'
import FormJson from '@/app/constant/form/loginForm.json'

import { useLoginUserMutation } from '@/app/redux/api/authApi'

const Login = () => {
  const router = useRouter()
  const [loginUser] = useLoginUserMutation()

  const { handleSubmit, control } = useForm({
    mode: 'all',
  })

  const onSubmit = async (data: any) => {
    await loginUser(data)

    router.push('/dashboard')
  }

  return (
    <div className="login">
      <Grid container spacing={3}>
        <Grid item md={6} xs={12} sm={12}>
          <div className="background">
            <DrillBitLogo />
            <div className="image-contaner">
              <div className="form-container">
                <div className="form">
                  <div className="login-placeholder">
                    Log in to your Account
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {FormJson
                      ? FormJson.map((field) => (
                          <FormComponent
                            key={field.id}
                            field={field}
                            control={control}
                            isLoading={false}
                          />
                        ))
                      : null}
                  </form>

                  <div className="or-title">or</div>
                  <div className="social-icon">
                    <Button
                      className="btn"
                      variant="outlined"
                      startIcon={<GoogleLogo />}
                    >
                      Google
                    </Button>
                    <Button
                      className="btn"
                      variant="outlined"
                      startIcon={<FacebookLogo />}
                    >
                      Facebook
                    </Button>
                    <Button
                      className="btn"
                      variant="outlined"
                      startIcon={<LinkedInLogo />}
                    >
                      LinkedIn
                    </Button>
                  </div>
                  <div className="account-container">
                    <span className="account-title">
                      Dont't have an account?{' '}
                    </span>
                    <Link className="create-account" href="/sign-up">
                      Create an account
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={6} xs={12} sm={12}></Grid>
      </Grid>
    </div>
  )
}

export default Login
