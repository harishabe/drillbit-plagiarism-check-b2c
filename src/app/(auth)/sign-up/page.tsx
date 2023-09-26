'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Grid } from '@mui/material'
import { DrillBitLogo } from 'public/assets'
import { FormComponent } from '@/app/components'

import './../login/page.scss'
import FormJson from '@/app/constant/form/signUpForm.json'

import { useRegisterUserMutation } from '@/app/redux/api/authApi'

const SignUp = () => {
  const { handleSubmit, control } = useForm()
  const [registerUser] = useRegisterUserMutation()

  const onSubmit = (data: any) => {
    registerUser(data)
  }

  return (
    <div className="login">
      <Grid container spacing={3}>
        <Grid item md={12} xs={12} sm={12}>
          <div className="background">
            <DrillBitLogo />
            <div className="image-contaner">
              <div className="sign-up">
                <div className="form-container">
                  <div className="login-placeholder">Create your account</div>
                  <form onClick={handleSubmit(onSubmit)}>
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
                  <div className="account-container">
                    <Link href="/login" className="account-title">
                      Back to login
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

export default SignUp
