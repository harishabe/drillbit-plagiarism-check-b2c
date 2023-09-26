'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { Grid } from '@mui/material'
import { DrillBitLogo } from 'public/assets'
import { FormComponent } from '@/app/components'
import { SocialLogin } from './SocialLogin'

import './page.scss'
import { LoginFormJson } from '@/app/constant/form/loginForm'

import { useLoginUserMutation } from '@/app/redux/api/authApi'

const Login = () => {
  const router = useRouter()
  const [loginUser] = useLoginUserMutation()

  const { handleSubmit, control } = useForm({
    mode: 'all',
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await loginUser(
      data as {
        username: string
        password: string
      }
    )
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
                <div className="form">
                  <div className="login-placeholder">
                    Log in to your Account
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {LoginFormJson
                      ? LoginFormJson.map((field) => (
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
                  <SocialLogin />
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
      </Grid>
    </div>
  )
}

export default Login
